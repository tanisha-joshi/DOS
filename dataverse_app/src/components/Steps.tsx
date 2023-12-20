import React from "react";

export default function Steps() {
  return (
    <div>
      <div className="text-4xl my-5 ">How it works</div>
      <div className="w-full  mt-12">
        <ul className="steps  steps-vertical gap-6  px-4 py-2 w-[65%]">
          <li className="step step-neutral">
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2"  />
              <div className="collapse-title text-xl font-medium">
                Creators create a community
              </div>
              <div className="collapse-content text-start">
                <p className="pl-2 mt-2">
                  We empower creators to establish their exclusive communities,
                  fostering a space where they can curate content and connect
                  with like-minded individuals.
                </p>
              </div>
            </div>
          </li>
          <li className="step step-neutral">
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2"  />
              <div className="collapse-title text-xl font-medium">
                All content posted in the community is encrypted{" "}
              </div>
              <div className="collapse-content text-start">
                <p className="pl-2 mt-2">
                  We ensure utmost privacy and security by encrypting all
                  community content to prevent prying eyes.
                </p>
              </div>
            </div>
          </li>
          <li className="step step-neutral">
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2"  />
              <div className="collapse-title text-xl font-medium">
                Users subscribe to communities
              </div>
              <div className="collapse-content text-start">
                <p className="pl-2 mt-2">
                  Users can tailor their experience by subscribing to
                  communities which interest them, ensuring they receive updates
                  and access to content that aligns with their preferences.
                </p>
              </div>
            </div>
          </li>
          <li className="step step-neutral">
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2"  />
              <div className="collapse-title text-xl font-medium">
                Only subscribed users are allowed to view content
              </div>
              <div className="collapse-content text-start ">
                <p className="pl-2 mt-2" >
                  We enhance community exclusivity by restricting content access to
                  subscribed users, fostering a sense of belonging and
                  engagement within the encrypted space.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
