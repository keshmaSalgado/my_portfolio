import { useState } from "react";
import Stack from "./stack";
import Crtificate from "./Certificate";

export default function TeckStack() {
    const [activePage, setactivePage] = useState("tech");



    function Content() {
        switch (activePage) {
            case 'tech':
                return <Stack />;
            case 'Certificate':
                return <Crtificate />;
            default:
                <Stack />
        }

    }




    return (
        <div>
            <div className="shadow-2xl border border-transparent shadow-black bg-blue-950 text-[10px] gap-1 flex items-end">

                <button className="bg-red-500 w-5 p-1 hover:bg-amber-50 hover:text-red-600 m-0.5 rounded-[10px]" >✖</button>
                <button className="bg-red-500 w-5 p-1 hover:bg-amber-50 hover:text-red-600 m-0.5 rounded-[10px]">[]</button>
                <button className="bg-red-500 w-5 p-1 hover:bg-amber-50 hover:text-red-600 m-0.5 rounded-[10px]">-</button>
            </div>
            <div>
                <button className="m-1 p-1 shadow-2xl shadow-gray-600 bg-gray-50 border border-transparent text-black text-sm rounded-[10px] hover:bg-blue-950 hover:text-amber-50 transition-colors duration-300" onClick={() => setactivePage('tech')}>TechStack</button>
                <button className="m-1 p-1 shadow-2xl shadow-gray-600 bg-gray-50 border border-transparent text-black text-sm rounded-[10px] hover:bg-blue-950 hover:text-amber-50 transition-colors duration-300" onClick={() => setactivePage('Certificate')}>Certificate</button>
            </div>
            {Content()}
        </div >
    );
}