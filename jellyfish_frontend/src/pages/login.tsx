import { Form } from "@heroui/form";
import { Input } from "@heroui/input"
import { Button } from "@heroui/button";
import DefaultLayout from "@/layouts/default";

export default function Login() {
    return (

        <DefaultLayout>
            <Form
                className="w-full max-w-xs flex flex-col gap-4"
                onSubmit={(e) => {
                }}
            >
                <Input
                    isRequired
                    errorMessage="Please enter a valid email"
                    label="Email"
                    labelPlacement="outside"
                    name="email"
                    placeholder="Enter your email"
                    type="email"
                />
                <Input
                    isRequired
                    errorMessage="Please enter a valid password"
                    label="Password"
                    labelPlacement="outside"
                    name="password"
                    placeholder="Enter your password"
                    type="password"
                />
                <div className="flex gap-2">
                    <Button color="primary" type="submit">
                        Submit
                    </Button>
                    <Button type="reset" variant="flat">
                        Reset
                    </Button>
                </div>
            </Form>
        </DefaultLayout>
    )
}