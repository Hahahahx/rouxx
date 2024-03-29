import { NavLink, useLocation } from "react-router-dom";
import { RouterView, useRouter } from "@roux/react";

const Index = () => {
    const { child } = useRouter();

    const location = useLocation()
    console.log(location)

    return (
        <>
            <ul>
                <li> index</li>
                {child?.map((item: any, index: any) => (
                    <li key={index}>
                        <NavLink to={item.path}>{item?.path}</NavLink>
                    </li>
                ))}
            </ul>
            <div>
                <RouterView />
            </div>
        </>
    );
};

export default Index;

export const handles = {
    add: () => {
        console.log("sad");
    },
};
