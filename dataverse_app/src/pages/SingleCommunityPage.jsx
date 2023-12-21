import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box, useMediaQuery } from "@mui/material";
import DisplayPost from "../components/DisplayPost";
import CommunityList from "../components/CommunityList";
import { useContractRead ,useContractReads} from 'wagmi'
import { abi, address } from '../constants'
import CommunityDeatils from '../components/CommunityDeatils';
import WidgetWrapper from '../components/WidgetWrapper';
import CreatePost from '../components/createPost';
import { useSearchParams } from 'react-router-dom';
import { loadFile } from '../utils';
// import { useContractRead } from 'wagmi';
const postData = [
    {
      communityName: "ShixPost",
      communityProfilePic: "",
      postPic:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIWEhQWEhEUGRQUFRwdGhwYEhEYGRgcHBkaGhgaGhYcIS4lHB4rIRgaJzgmKzAxNTU1GiU7QEg1Py40NTQBDAwMEA8QHxISHzQrJSsxNDQxPTQ0NDQ0NDQ0MTQ0MTQ0NDQ0NDQ0NDQ0ND00NDQ0NDQ0NDQ0NDQ9NDQ0NDQ0NP/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBQYEBwj/xABKEAABAwIDAwcHCQYEBQUAAAABAAIRAxIEITEFIkEGBxNRcZLRFDJTYYGRshUjJEJSgqGxwRYzVGJy0qLC8PGTlLPT4TQ1dIOj/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAIDBAEFBv/EACkRAAIBBAEEAQQCAwAAAAAAAAABAgMREhMhBBQxUXEVImGxBUEjMoH/2gAMAwEAAhEDEQA/AO+EQnwiF9HcwaxkIhPhEJcaxkIhPhEJcaxkIhPhEJcaxkIhPhEJcaxkLqZs2uQCKNQgiQQx0EHTgoIW/wAPh3uo0i2q5pFIAABhbJaIcQRJg8J4LN1PUOlZpeSyFFS8mJ+S8R6Cp3H+CPkvEegqdx/gtXhcTixHSU5m1zt0ktDjTLgHNMG0vqNDYmKYJmd6eicSXYdzg4Bwuqt3bWE0jLRqYDwOJzKyd/P0ifbx9mN+S8R6Cp3H+CPkvEegqdx/gtU2vjWXCxj4MyW1Jh1TMiCRDWk7ozMCOpSmrjBSDgxjqpcSWmbY6EuAaZEA1AGyZgOKfUJ+kO3j7Mh8l4j0FTuP8EfJeI9BU7j/AAWpNfHZvaxjiWZNte1uQxDh5zgQ50UASRlcpPKMY6BaxslpkMqadMASbiIHR8NZnQJ9Qn6Q7ePsyXyXiPQVO4/wR8l4j0FTuP8ABah+MxxYfmWNcQNGPJaTTJmLgHS+Bkd2c9JU+Oq4qQym3dcwS60yHGbiDcBwiMiCZTv5+kO3j7Mh8l4j0FTuP8EfJeI9BU7j/Ba3yjG3WhjCCXbzmPGV9QAwHQQGikYJBIceox1+UV+nLbB0QYd60yXblsGYLTLhGRlvVBL6hP0h28fZh/kvEegqdx/gj5LxHoKncf4LWtxGMB3qbfqiW03EGWFxhnSSN8hszwk5Zju2bVrODuma1pDoaG36RmDdrB+sMin1CfpDt4+zCfJeI9BU7j/BHyXiPQVO4/wXpSE7+fpDt4+zyyrRc1xa5pa4agggjKRl2FMhW/KQfSqv3fgaquF6NOeUFL2kUulZjIRCfCIU7nNYyEQnwiEuNYyEQnwiEuNYyEQnwiEuNYyEQnwiEuNZJCITrUWqrI36xsIhOtRamQ1jYRCdai1MhrGwiE61FqZDWNhEJ1qLUyGsbC2bto1KbaDWUHPD6bd4XwJAZnDSBvupanzXPdowzjrVrMTtV9FjA1jXThxZJdnVI+baY+qQ1xJ4WrD1ruojHEa7bmINOW4V7XODomCWkNaRLeLgXEEfyH1xONsVi4NGFeCSBvGLSalmcAyAMyRIyyJEOMlLb1NzaptcOiIaZylznupgDj5zToDkREmQG4bbrX0n1bDYw04hwc4ipTpvaS3hnUA1OkrzwMpY3EValgb0XzbiXWOfDh0BHnNAg3VAM87SdQQL5Uf7QMNsU3m7ICWBxJvjdJ83ccLtJgdcSUNsAsc4tIcyoGEHdBJdaHS7RmfncSDE5SBcIVGdth1GpUYwiKD6jbrYNjQ4hwBkec38fbBT5SC59zNxjW6OF1w6Xpm6wS11JzA0ZlzXdSA0aFRVtugWgMIc60i5zYtc9jZmfO+cyb6j2FcPyipuGTXcYzYAYpio7eJAADXNkmBLhnGaAvEIQgBCEIAQhCAwPKMfS6v3fgaq2Fa8oh9Kq/d+BqrLV7VJ/wCOPwv0Nd+RsIhOtRarMhrGwiE61FqZDWNhEJ1qLUyGsbCITrUWpkNY2EQnWotTIax9qLVLai1VZG/WRWotUtqLUyGsitRapbUWpkNZFai1S2otTIayK1FqltRamQ1kVq9CwH7qn/Q38gsFaqHnP5R1qL8NQp1qzWuwrXkUnupmS5zQXPBkjc07esRi6x8IprQtY9htGeQz1y17U5fM2H29iH3RiMY0ZZ+X1wG5mcyc5ke7JdlHbdZ7gylicc8uMEjG1pEZm0E5N1kmDppocLmkUqDZ9GWhEDqC+bsXj8UxwFTG49sgQBjKhHVMyuHHbWxgBdS2hjIAza7FVie0EOzXU0zji07M+oISWjqXyd+0uP8A4/F/81X/ALkftJj/AOPxf/NV/wC5dIn1jA6lH0Lbg6BIBAPUCQSB1SQJ7B1Lwbmr2zi6mOe2risQ9vk7jD69V4m+mJhzonM+9euvrP8Atu7zlFysdSNChZt2JcAS57gAJJL3ZAaleev5WbTxL3OwbujoMcQHGCXx1udOfqAy0zXHJLlklBvwezIXhFPlttShWIrVC8A7zHBoBH8rmgEdq9Q2LtduJosq03utdqC4y1w1a71jwPFdUrnHBo1CFUte77TveVI2o4fWPvK7c5YzHKEfSqn3fgaq21Wm3x9Jqfd+Fq4IXrU5fZH4RshTvFP8EVqLVLCIVmRLWRWotUsIhMhrIrUWqWEQmQ1kVqLVLCITIayK1FqlhEJkNY61FqkhELPsRuwRHai1SQiE2IYIjtRapIRCbEMER2otUkIhNiGCI4RCktRamxDBEcLEc7tMHF4aTH0GlOkfvKsa6cVu7ViOeSg4V8JUaSIwrWyDpDnkfEVm6l5JWMfVpLExeOw4bTaynUY64XOLDcBkIaTGRGYMTr2q35F0ywVKlhMC2bREwHWtMjOS2R1ALO7PxdtwDQ69pBBndP2mkeqdfXKvtm7Wayk9jmOda4OydEXNDSYBEgEDvBefNSSaKaeLkmS8pWVHtD303NLTxDQDP2QCTAjieKybcU4cVruUmLL6QLgQ5wBAMgjrEdoKxTm5E8ZUqLvHkhXSUuBKgAOWh0SBdbKTSwgneByzy9f4hQ06D3B1rSbG3Ojg0EAk+qSPerblBteaH/3B/wD8d3x017U9eL80rSNoPn+Hd8dJe0VFGRJeDM8vseaWz65HnPbYPv5O/wANypeTdYsotptp7rKc3WPbLuIMiJJJMhR87OJAw9KmdHPc7utI/wAy5tn8oqZw1F1SsWS0NMNad5uuo1yVNVOyNFDyys5RlzwKjmWlptPzb2DekDecd4z1dauebbawZU6NzgG1gMuF4EtPaRI9yq+WO1WuwoscHNc5paeuHTP4LG4LaLwWWGHNI/AyDPWDCnS5iRrJZH0yE+FXbCx7a9CnUBBuaJjr4qxBUyhlBt0fSans+Fqr4VltsfSH+z4WrhtXowmlFfB7FKKwj8L9EcIhSWotU9iJ4IjhEKS1FqbEMERwiFJai1NiGCI7UWqS1FqbEMER2otUlqLU2IYIfai1SQiF4/cC5Hai1SQiE7gXI7UWqSEQncC5Hai1SQiE7gXI7UWqSEQncC5HasNztVIxuGz1wVP/AKlVb2F5vzzP+nYQD+Cpn/8ASr4KyFTMxdb4iYprg1zoYCHgQYybnnA/1qunYQcK5c4bjcnkyYDjumAZO8AcupclckNGWvarbk9gi9+sAkDtDRM++B95cnwmzLSu5JE+22l72MaS4Z71pAMy4kDg0ZBZprIkOB1M/lqvTa2DaHsEA7jgD1QWz75HuWX5X06bDTa1oD3BxJ0yEBoIHt9yqpT5xL61PhyZQ02sGYnTOYPty1S07WucDbBaXZglroFwGRB1AXMyuQQp2VWGbmzkdDpPqV7Mi5NxzXuY7GFwgO6B4gXDLpKRlw0nOMoENGucev1dF47zXCmMa6y64Yd8yBHn0uMrQcvOVNZlR1Ci4sDIDnDznFzQ6AeAzA7VE74KDnfxRNaizg1hd7XOj/Is9ySrNdfQf9feZmBvDWCeMQfYqfG1y95c97nE6lziT7ypNhx5QwHR2WkzOgXWvtZOMsZJl5ylDQKdMaNkHemC6dTxPE9qz1OsGttI0dmRxzVpyiqU8mMJJa4zAyHqniqQOJAEeoH9PWkF9oqyvK563zPbYLnVaDjkG3tBOhBgx2gg+xeqL5u2Syqx7XUa1j26He17RwXvnJjGvrYSg+qAKrm78R5zSWu/ELrRW+SPbQ+kP9nwtXDarHbA+ff7PhauKFW69nY9ik/sj8L9EdqLVJCIXO4J3I7UWqSEQncC5Hai1SQiE7gXI7UWqSElqdwLjLUWp9qLU7gXJLUWp0IheNvZG421FqdCITexcbai1OhEJvYuNtRanQiE3sXG2otToRCb2LjbV5nz0NnaGFA/gaf/AFKy9Oheb88FInaOGPAYGnJjLKpV4rf0U8mzH1nOJ584boP83AFb3kZhgKAe4RvOHbDj+s+5YbFVWw2IIBnLLsVhs7lViaVMU29G5g0uYZE5xLSOvittWLkrIzUZxjK7PRWMudPUIH5u/ED3LzTlVjBUxTy0gtZDWx6tf8RcpMZyoxL2WXNY0jOxpBPXJJJ90KhGqjSpODuydaspqyDip6XHsXOSpqFQgyNY/JWyRRF8m55rngY2o4nIYZ5PYH0iuXlFjemqVKwiKjiQJGQmG/gAurmwr3414cB/6d85CTL6fHVVW28IaL6lM/Ue5vuOR/XsK4jr5M64AE5ZEn3SujYxio53FjHOH9UWt/Ermkmfb7/902i8guAyuEfiD+i6PDuOrvnQ+qFJgWXP7Ej2buXqXTgWw4D1Sffn4e1EcZbYdpyA/wB//C9O5ttpPea9F2bGBj6fqBaGuHZIn2leZGq7hInJb7m4DmV6jXjz2MAzzALQ5nsJFT3BJeAjcbXHz7/Z8LVxwu7aw+ef7PhauOF4tWtabX5Z61N/ZH4Q2EQnQiFVvZZcbCIToRCb2LjYRCdCITexcbCIToRCb2LjYRCdCITexcdCISwiF52wgJCISwiE2ASEQlhEJsAkIhLCITYBIRCWEQmwDYWL51cXNalh3Phj8LTc7zPSVIIkSDurbQqDnC5JYnEvpVqFNlQNoNY5otFQWue+WlxGRuGhnI6yvX/iJKU5X9IydW2krHjzdnU+FQxcATkYBDiNBqbfxXTtPYlJlYU2PcQQw3OIjfaXahvV6lr8ByDxznNoeSFtE1mOfWc+m02gEGGu3wBJgAZ8YmRy8r9iMw+0H0hUdYTRi6TFM0Xtc5xAndcwnKcnDUyF79omA6uT/IfZNWlVqV8bXaykGhzrqNNt7nVJaA5ricmtjjJOXBdeH5D7AdeflDE2h0NIczzbRJd8zlvXZ5DILF4zGue7U2jJs6wBAJ63QMyueni3tMtJyKi0rnTSbS5FYNuJqU6Faq6mBTLHmrStcHgXQ9rIc6TIaBox2YtVrW5ssMKTntq1w4NcW3upNbIz3zZu2iA7hJOeWfPsSpUw7qdbEUvo5c0uDrXBlxALi0+aMwV6mDuvBc0CHk32lpB+00ZEGRpObyIMLl4vwdcXHyeT7N2JV2fh245k3PqdBbVaC1zHOvFRtjgWwGBsO4gnSAuXao6eo99TJ1TNwbkJPUDK1/LOixuAdYyA7aYJJc4vcbXyXtPmkEFoHFrWuyuhZI6+wKiq2nwSh4Kb5ApCYdU7zP7U2hyfokOLnvAbxuYPxLVbVHAAkmABJPUFY7E2NTc0VcSAQ7NrHmGsbwLwci4jPPTTrUY1LcyLFBydkZOvgcIAGtrun+pse+1KMK1kEEknrIP5BbHaWyMK9jujbTkaOZZke1qxRw72kgO0MEHr4/kuxqqSduBOi4W/su9ibPbVa9zy7cIi0gTMzMgq2dt/yffDWh9JhDZDt4XB4uAImC38T1p/I/Dk0Kxj64HuaPFU/LLBEMv4Bpb+BU+WkUtu/B7LtPOq89nwtXLC6to/vXdg+Fq5oXy/UVLVpfLPUp/6L4QkIhLCIVOwsEhEJYRCbAJCISwiE2ASEQlhEJsAkIhLCITYByEiFDAozFQkQmAzFQkQmAzFQkQmAzFQkQmAzBXXytQYadJ9RjajqbXBrnAEgyAROubSqVZjnIrOFSiMiwYdjiMg9pvfvtOuQadI9ui9f+IjjKXwjPXeVkb/ABG1gwOd0b3iRNlriBAzgkE8dF5Hzo7bZXr0+jc0t6MBsDfAJl4fIlpugWnS31rmwfLOrSpubUue9hhhmJyJDiY0B1H+hjMViX1Kj31HXPc4uceskz7AvfRnkrDHvjQ5qw2Ph2uqh1R7QxmZuyaY0aTPH9CqhzJIz4L0XkZhAzDNkA9IS8yPY0Z+oD3qNSWMSdGOUi1x2NpnCO6QNa2rTeCJJyszLcgScxAyzIWx5MVnPwdCoS8OqUmFxLCRJDQ5zYByLi4meL3OyDVi+UGPYzBYgvsLnAMpjU3vBbIEfVaXH7qu+Q206TsHQo03gVKTbXB0EtcGiHAGDYbd4jgXD1iFFcFlfyUvKXEB+zjFm7tQNlpumMOdX/XPC7qA6lmJz9y0fKR/R0KtItyftOkWXBrCxtXDvDd0DdDSxzc4MNniqCphyypUaXA2vjdMjICCDxB1XK65uUwZw49r3WsY25z3tAGgIEudJ6oaZ9UrU0dlnyc022XO3oJLmB0ZBp+z4rN16wZVoT9Z7x72ECO9HtVxs/aOFzbTIFQ+sS6OvrPBZpqWKsbKKXJPQwFUNJrFgLfNsmR1gzw9Sx22T0eKc0aOAd7Tr+IWyxFYkGSsLylcDWaQfqkdkHxlKF3IlWSUTV812Kc+viMPqH0r2+oscGn3h/8AhScvKTmVXMcd3o5jhmCs/wAgdpPw+OZUZ9khwgGWFzS8CeMA+5X3LbaTcRiHVGt3HSGzE2gRwy1WwwPyes7R/eu7B8LVzro2j+9d2D4WrmXyXUQ/zS+WboTtFfAqEiFTgSzFQkQmAzFQkQmAzFQkQmAzFQkQmAzEQkQt2sxbBUJEJrGwVCRCaxsFQkQmsbBUJEJrGwVYjnLxLWY6iXk2NwVIwHRJNStAI4gxHtW2XnfO5TB2hhCRu+S0Pb89Vke4r0P4+NnL/hzK7Mq/ZGIqML7Q1nCTblwAbr74VIWOaTMjwjL816liWjoyPUvO9qMhw/oHh+i9SEm2Tq00ldCbK2f01Qi61rWiesz1L0PZp+b6PTctGcSIjVefbIxRpVA4CQcnDrHirvH7UD6dlOd7ziREDqC5OMpOx2lOMY3/ALODlNWp9M2mx9wZN7hFt7ouiNYAAnrlWfJeg17y81XtLXQ2ww4dTgdVT4SkOkZI+u38wr/APbSxpYBDawByyh2c5+wqU7xVkci83lL2WnKTHmjTmsXO6R9O/ea0dIxj4eALnb7alxJgXBwGhWPxG3mb/RMIe8+d0lQkGInPLIK/5wGB1MgF1wxAy3bHNZRcHH7RLCHeoCp1krDNpAFvEls5TlJOR9fipNXtcrlxJpC4rE1DaXVHOLTIJcTBy0nsWnwuw2urNqdILHQ9obN0mHa8OOfuWSxOsdS1nJrajeihwN1OGg8CDNvYco9g61VVuo3RfQaysy+xToB61g9t/v3dcBbJlz3aE/6/JZzlTgHNqX6hwAPUDGiooK0jRWhJxujh2E8txFO2Jdc0SYEua5ok9UkLuOJbZTpAOL4cMhOj3gk90lUdN5Y9juLXBw9dpn9Fd19m1emc+m8NaC4sOptcS8ZfeK1ryefI9+2l+9d2D4WrlXTtL967sHwtXKvna8L1JfLJKdkKhIhV6zuwVCRCaxsFQhCaxsBCEJrGYIQhNYzI7kXJlyLl6egxZj7kXJlyLk0DMfci5MuRcmgZj7kXJlyLk0DMfci5MuRcmgZj7lg+d+mfLMCc4fQpt7tRx/zLc3Lm5ackK2N8kqUH0w6jbc15c0Fsg7pa0565H/fR08MGy2lO7MrijDDJ4LzXatQl0fZ3fd/5JXtGN5E4x7bWuoeuX1P7Fk63NNtIvcb8LDnEj56rxM+jWmCs+TXVmmkkzC4Yadi6wVr6fNPtNv18J/xqv/bUo5rdp/awn/Hq/wDbVqaMzMYyoQ9lpzvb8QWnbRa3GYInrEydd4ASe1y78NzW7SFRjnOwtrXAmK1QnL/61fYvkHi3VaDwaEMO985UBgOY7Lcz80qEuWXU2lF3M1y+wVSnSa+oBY/HOdbbBNzC8ODyJMtfBGgLOMrg2XhGU2OeRvP3neoahvYAvROWPJDFYrDYenT6APp1Q95LnsDhYWughp6xCpMZzfbQdRcxjsPc5sZ1agAnX6ihUu7JEqUoJtyPHary55dxc4n3mf1Wu5ObLc1ubRv5kESDEQI/FXOA5otoNqNdUfhrQc4q1CfgW0pcjcSIg0cv5n/2rrv4Rf0zpJuUmZynRtAEAHgBEf1EBc20dnCqy0xHCRqeLj+i2A5I4ri6lJ1336dXmpf2SxXXR77/AO1Rsz0F1NG1m0eZ/scwnNxA6h4mSu/CYKnSBYSXsjVxJLYHA/Z9S3NbkhiyIDqOeu+/+xR0+Q1dxAe+k1s7xa5zjHGAWjNRcppqyMlZ9PKNlYv9qn55/wB34WrjuXTtc/Pv+78LVxysk6N5N/k8WU7Nj7kXJkolR0HMx9yLkyUSmgZj7kXJkolNAzH3IuTLkXJoGY+5FyZci5NAzIrkXJUL0sUY8mJci5KhMUMmJci5KhMUMmJci5KhMUMmJci5KhMUMmJcp24yoAAKj4H8zvFCExRJSYvltX0r+87xR5bV9K/vHxQhdsiOyXsPLavpX94+KPLavpX953ihCWQ2S9h5bV9K/vO8UeW1fSv7zvFCEshsl7Dy2r6V/ed4o8tq+lf3neKEJZDZL2HltX0r+87xR5bV9K/vO8UISyGyXsPLavpX953ijy2r6V/ePihCWQ2S9h5bV9K/vO8UeW1fSv7x8UISyGyXshfULjLiSTxJJPvTbkqFzFDJiXIuSoTFDJiXIuSoTFDJiXIuSoTFDJiXIuSoTFDJiXIuSoTFDJn/2Q==",
      title: "Meme101",
      user: "tryptophan",
      description: "Your meme",
      likes: "12",
    },
    {
      communityName: "ShixPost",
      communityProfilePic: "",
      postPic: "https://i.pinimg.com/474x/ee/05/48/ee054872761d9054bacf8c2c1e97ee73.jpg",
      title: "Meme101",
      user: "tryptophan",
      description: "Your meme",
      likes: "12",
      members:"25"
    },
    {
      communityName: "ShixPost",
      communityProfilePic: "",
      postPic: "https://media.npr.org/assets/img/2015/03/03/overly_custom-39399d2cf8b6395770e3f10fd45b22ce39df70d4-s1100-c50.jpg",
      title: "Meme101",
      user: "tryptophan",
      description: "Your meme",
      likes: "12",
      members:"30"
    },
  ];
  const community= {
    communityName: "ShixPost",
      communityProfilePic: "",
      user: "tryptophan",
      address:address,
      members:"30"
  }
const SingleCommunityPage = ({handle}) => {

const index = 0

const {data} = useContractRead({
  address:address,
  abi:abi,
  functionName:"getCommunityDetails",
  args:[index]

})
const {data:post} = useContractRead({
  address:address,
  abi:abi,
  functionName:"getCommunityPost",
  args:[index]

})
console.log("post",post)



console.log("data",data)
 
  const isNonMobileScreen = useMediaQuery("(min-width:1000px)");
  return (
    <>
     <div className="flex flex-col h-screen justify-between">
      <Navbar  handleFunction= {handle} />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreen ? "flex" : "block"}
        gap="1 rem"
        justifyContent={"space-between"}
        
      >
         <Box 
          style={{
            marginTop: `${isNonMobileScreen?"3rem":"5rem"}`,
            marginRight:`${isNonMobileScreen?"2rem":"0"}`
          }}
         flexBasis={isNonMobileScreen ? "36%" : "undefined"}>
         {data && <CommunityDeatils community={data}/>}
      <CreatePost/>

        </Box> 
        <Box
          flexBasis={isNonMobileScreen ? "42%" : "undefined"}
          style={{
            marginTop: "5rem",
            
          }}
          className=""
        >
          {post?.map((postId) => {
            return <DisplayPost post={postId} />;
          })}
        </Box>

        <Box flexBasis={isNonMobileScreen?"26%":"undefined"}>
                
            </Box>
      </Box>



      <div className="">
        <Footer />
      </div>
    </div>
    </>
  )
}

export default SingleCommunityPage