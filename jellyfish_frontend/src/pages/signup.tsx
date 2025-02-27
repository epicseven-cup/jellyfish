import { Form } from "@heroui/form";
import { Input } from "@heroui/input"
import { Button } from "@heroui/button";
import { useState } from "react";
import DefaultLayout from "@/layouts/default";
export default function Signup() {
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
                    errorMessage="Please enter a secured password"
                    label="Password"
                    labelPlacement="outside"
                    name="password"
                    placeholder="Enter your password"
                    type="password"
                />
                <Input
                    isRequired
                    errorMessage="Please confirm password"
                    label="Confirm Password"
                    labelPlacement="outside"
                    name="password"
                    placeholder="Confirm your password"
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