import { User } from "@heroui/user";
import { Dispatch, SetStateAction, useState } from "react";
import { Skeleton } from "@heroui/skeleton";
import { Card, CardBody, CardHeader } from "@heroui/card"
import { Image } from "@heroui/image";
import { Form } from "@heroui/form";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { useHover } from "@react-aria/interactions";
export default function Setting() {
    // Remember to handel html injection on the frontend too
    let username: string = "Test"
    let position: string = "test user"
    let email: string = "Test@example.come"

    function findAuthCookie(cookies: string): string | undefined {
        const splitCookies = document.cookie.split(";")
        for (const cookie of splitCookies) {
            if (cookie.trim().startsWith("auth_jwt=")) {
                return cookie.trim().replace("auth_jwt=", "")
            }
        }
        return undefined
    }

    const [authCookie, setAuthCookie] = useState(findAuthCookie(document.cookie))

    let [events, setEvents] = useState([""]);

    let { hoverProps, isHovered } = useHover({
        onHoverStart: (e) =>
            setEvents(
                (events) => [...events, `hover start with ${e.pointerType}`]
            ),
        onHoverEnd: (e) =>
            setEvents(
                (events) => [...events, `hover end with ${e.pointerType}`]
            )
    });
    return (
        <div className="flex py-5 px-10 items-center gap-20 justify-center">
            {authCookie ?
                <><Card className="py-4 flex">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                        <p className="uppercase font-bold ">Profile</p>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2 gap-2">
                        <div  {...hoverProps}>
                            <Image
                                alt="HeroUI hero Image"
                                src="https://heroui.com/images/hero-card-complete.jpeg"
                                width={300} />
                        </div>
                        <div>
                            <h4 className="">User Name: {username}</h4>
                            <h4 className="">Position: {position}</h4>
                            <h4 className="">Email: {email}</h4>
                        </div>
                    </CardBody>
                </Card>

                    <div className="">
                        <Form
                            className="w-full max-w-xs flex flex-col gap-4"
                            onSubmit={(e) => {
                            }}>
                            <Input
                                isRequired
                                errorMessage="Please enter a valid username"
                                label="Username"
                                labelPlacement="outside"
                                name="username"
                                placeholder="Enter your new username"
                                type="text" />

                            <Input
                                isRequired
                                errorMessage="Please enter a valid email"
                                label="Email"
                                labelPlacement="outside"
                                name="email"
                                placeholder="Enter your new email"
                                type="email" />
                            <Input
                                isRequired
                                errorMessage="Please enter a valid password"
                                label="Password"
                                labelPlacement="outside"
                                name="password"
                                placeholder="Enter your new password"
                                type="password" />

                            <Input
                                isRequired
                                errorMessage="Please enter a valid password"
                                label="Confirm Password"
                                labelPlacement="outside"
                                name="password"
                                placeholder="Enter your new password"
                                type="password" />
                            <div className="flex gap-2">
                                <Button color="primary" type="submit">
                                    Submit
                                </Button>
                                <Button type="reset" variant="flat">
                                    Reset
                                </Button>
                            </div>
                        </Form>
                        {/* {events.map((e, i) => <li key={i}>{e}</li>)} */}
                    </div>
                </>
                : <Skeleton>
                    <User
                        avatarProps={{
                            src: "",
                        }}
                        description=""
                        name=""
                    />
                </Skeleton>}
        </div>
    );
}