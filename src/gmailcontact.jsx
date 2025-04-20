import { useState } from "react";
import { useNavigate } from "react-router-dom"


export default function Gmail() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setLoading(true); // 🟡 Start loading

        try {
            const response = await fetch("https://backend-for-my-portfolio.vercel.app/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            

            const data = await response.text();
            alert(data);

            setFormData({
                name: "",
                email: "",
                message: "",
            });
        } catch  {
            alert("Something went wrong");
        } finally {
            setLoading(false); // 🔵 Stop loading (whether success or error)
        }
    };
    return (
        <div className="relative">
            <button onClick={() => navigate(-1)} className="border-4 border-double p-3 m-3 hover:bg-amber-50 hover:text-black">
                👈🏻go back
            </button>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto border-4 border-double border-amber-50 text-black p-6 rounded-2xl shadow-md space-y-4">
                <h2 className="text-2xl font-bold text-center mb-4 text-amber-600">Contact Me</h2>

                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border  border-amber-50   text-amber-50 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border-amber-50   text-amber-50 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                />

                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full border-amber-50 px-4 py-2 border text-amber-50 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                />

                <button
                    disabled={loading}
                    type="submit"
                    className={`w-full py-2 rounded-md transition text-white ${loading
                        ? "bg-amber-400 cursor-not-allowed"
                        : "bg-amber-600 hover:bg-amber-700"
                        }`}
                >
                    {loading ? "Sending..." : "Send Message"}
                </button>
            </form>
        </div>
    )
}
