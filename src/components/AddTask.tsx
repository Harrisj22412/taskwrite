import { useState } from "react";
import Select from "./Select";
import Button from "./Button";

const AddTask = () => {
    const [titleVal, setTitleVal] = useState("");
    const [textAreaVal, setTextAreaVal] = useState("");
    const [dueDate, setDueDate] = useState(new Date());

    const priorityArray = ["low", "medium", "high"];

    const [priority, setPriority] = useState(priorityArray[0]);

    return (
        <form id="form" className="m-8">
            <div className="flex flex-col mb-6">
                <label htmlFor="title">Task Title</label>
                <input
                    type="text"
                    id="title"
                    placeholder="Title of your task"
                    value={titleVal}
                    onChange={(e) => setTitleVal(e.target.value)}
                    className="bg-inherit border rounded-sm p-2 focus:outline-none focus:ring-1 border-input focus:ring-slate-900"
                />
            </div>
            <div className="flex flex-col mb-6">
                <label htmlFor="description" className="mb-1">
                    Task Description
                </label>
                <textarea
                    id="description"
                    placeholder="Describe your task"
                    maxLength={200}
                    value={textAreaVal}
                    onChange={(e) => setTextAreaVal(e.target.value)}
                    className="bg-inherit border rounded-sm p-2 h-32 resize-none focus:outline-none focus:ring-1 border-input focus:ring-slate-900"
                />
            </div>
            <div className="flex flex-col mb-6">
                <label htmlFor="description" className="mb-1">
                    Task Priority
                </label>
                <Select
                    defaultSelectValue={priority}
                    selectOptions={priorityArray}
                    handleSelectChange={(e) => setPriority(e.target.value)}
                />
            </div>
            <div className="flex flex-col mb-6">
                <label htmlFor="description" className="mb-1">
                    Task Due Date
                </label>
                <input
                    type="date"
                    id="date"
                    value={dueDate!.toISOString().split("T")[0]}
                    min={new Date().toISOString().split("T")[0]}
                    onChange={(e) => setDueDate(new Date(e.target.value))}
                    className="bg-inherit border rounded-sm border-input p-2 focus:outline-none focus:ring-1 focus:ring-slate-900 invalid:focus:ring-red-600"
                />
            </div>
            <Button
                type="submit"
                content={{
                    text: "Add Task",
                }}
                extraBtnClasses="bg-pink-700 justify-center text-white font-semibold px-4 py-2 outline-1 hover:bg-pink-800 focus:ring-1 focus:ring-pink-800 w-full"
            />
        </form>
    );
};

export default AddTask;