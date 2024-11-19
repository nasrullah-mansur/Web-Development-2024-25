import Sidebar from "./Sidebar";
import { Outlet, useLoaderData, useNavigation } from "react-router-dom";

export default function Root() {
    const categories = useLoaderData();
    const navigation = useNavigation();

    return (
        <div className="bg-slate-100 p-6 max-w-screen-2xl mx-auto grid grid-cols-12 gap-4">
            <Sidebar categories={categories} />

            {navigation.state === "loading" ? (
                <div className="h-full text-center col-span-9 bg-white p-3">
                    <h1>Loading Data, Please wait ...</h1>
                </div>
            ) : (
                <Outlet />
            )}
        </div>
    );
}
