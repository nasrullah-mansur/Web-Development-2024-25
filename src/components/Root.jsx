import React from "react";
import Sidebar from "./Sidebar";
import { Outlet, useLoaderData } from "react-router-dom";
import { categoryLoader } from "../loader/blogLoader";

export default function Root() {
    const categories = useLoaderData();

    return (
        <div className="bg-slate-100 p-6 max-w-screen-2xl mx-auto grid grid-cols-12 gap-4">
            <Sidebar categories={categories} />
            <Outlet />
        </div>
    );
}
