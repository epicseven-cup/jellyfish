import { Accordion } from "@heroui/accordion";


import { AccordionItem } from "@heroui/accordion";
import { Button } from "@heroui/button";
import { Progress } from "@heroui/progress";


export default function Courses() {
    return (
        <Accordion>

            {/* TODO: There is a py and px inconsistancy */}
            {/* There will be a for loop here when backend and everything is setup */}
            <AccordionItem key={1} aria-label="Accordion 1" title="CSE 116" subtitle="Fall 2020">
                <div className="flex flex-row justify-evenly">
                    <Progress size="lg" aria-label="Loading..." className="max-w-md" value={50} label="Grade" showValueLabel={true} />
                    {/* TODO: Add a down pointing svg for this button */}
                    {/* TODO: use end endContent to add the button to the end */}
                    <Button
                    >
                        Details
                    </Button>
                </div>
            </AccordionItem>
            <AccordionItem key={2} aria-label="Accordion 2" title="CSE 220" subtitle="Fall 2020">
                <Progress aria-label="Loading..." className="max-w-md" value={50} />
                <Button
                    className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                    radius="full"
                >
                    Details
                </Button>
            </AccordionItem>
            <AccordionItem key={3} aria-label="Accordion 3" title="CSE 250" subtitle="Fall 2020">
                <Progress aria-label="Loading..." className="max-w-md" value={50} />
                <Button
                    className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                    radius="full"
                >
                    Details
                </Button>
            </AccordionItem>
        </Accordion>
    )

}