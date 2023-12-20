import Link from "next/link";
import { FunctionComponent } from "react";

type Props = {
    hrefLink: string;
    name: string;
    className?: string;
};

const page: FunctionComponent<Props> = ({hrefLink,name,className}) => {
    return (
        <Link href={hrefLink} className={`text-black border-solid hover:text-white hover:border-white border-2 w-full p-2 rounded-lg hover:bg-red-800 ${className}`}>{name}</Link>
    );
}

export default page;