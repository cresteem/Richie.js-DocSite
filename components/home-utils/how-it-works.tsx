import { Stepper } from "@mantine/core";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { GoGoal, GoTrophy } from "react-icons/go";
import { RiDownloadLine } from "react-icons/ri";

export default function HowItWorks() {
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="relative max-w-2xl mx-auto sm:text-center">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            How Richie.js Works:{" "}
            <span className="text-primary">Simplify, Automate, Optimize</span>
          </h3>
          <p className="mt-3 text-justify">
            Using Richie.js is as simple as selecting elements on your webpage.
            With just a few steps, you can automate the creation of SEO-rich
            results and save hours of effort.
          </p>
        </div>
        <div className="relative mt-12 px-3 lg:w-[50%] mx-auto">
          <Stepper
            active={4}
            orientation="vertical"
            color="#51c1b5"
            styles={{
              stepDescription: { lineHeight: "4ch", paddingBottom: "3em" },
            }}
            allowNextStepsSelect={false}
          >
            <Stepper.Step
              label="Step 1: Install or Add Richie.js"
              description="For pre-generated JSON-LD, use Richie.js in your Node environment. If rendering dynamically at runtime on the client side, simply add the provided JavaScript file to your web page."
              completedIcon={<RiDownloadLine size={20} />}
              allowStepSelect={false}
            />
            <Stepper.Step
              label="Step 2: Use Reserved Class Names"
              description="You can use the default reserved class names or configure them to suit your needs. Once configured, apply the defined class names in your web document, and Richie.js will take care of the rest!"
              completedIcon={<GoGoal size={20} />}
              allowStepSelect={false}
            />
            <Stepper.Step
              label="Step 3: Call Richie.js"
              description="For Node.js Environment: Invoke Richie.js using the CLI or API to pre-generate JSON-LD rich results. / For Client-Side: Use the Richie.js API method to dynamically generate rich results. Pass the required parameters specifying the rich result type."
              completedIcon={<AiOutlineThunderbolt size={20} />}
              allowStepSelect={false}
            />
            <Stepper.Step
              label="Step 4: Sit Back and Watch Richie.js Work"
              description="After completing the setup, you're all set! Richie.js will automatically generate rich results and enhance your SEO. Just sit back, relax, and watch as it drives more leads, boosts engagement, and improves your website's visibility."
              completedIcon={<GoTrophy size={20} />}
              allowStepSelect={false}
            />
          </Stepper>
        </div>
      </div>
    </section>
  );
}
