import React, { useEffect, useState } from "react";
import { backendAPI } from "../../api/BackendApi";
import { Link } from "react-router-dom";
import "../FormCar/FormCar.scss";

const FormBike = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const modelYear = [
        2025,
        2024,
        2023,
        2022,
        2021,
        2020,
        2019,
        2018,
        2017,
        2016,
        2015,
        2014,
        2013,
        2012,
        2011,
        2010,
        2009,
        2008,
        2007,
        2006,
        2005,
        2004,
        2003,
        2002,
        2001,
        2000,
        1999,
        "1998 or older",
    ];
    const nationalities = [
        "Afghanistan",
        "Albania",
        "Algeria",
        "Andorra",
        "Angola",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bhutan",
        "Bolivia",
        "Bosnia and Herzegovina",
        "Botswana",
        "Brazil",
        "Brunei",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Central African Republic",
        "Chad",
        "Chile",
        "China",
        "Colombia",
        "Comoros",
        "Congo (Congo-Brazzaville)",
        "Costa Rica",
        "Croatia",
        "Cuba",
        "Cyprus",
        "Czechia (Czech Republic)",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Eswatini (fmr. 'Swaziland')",
        "Ethiopia",
        "Fiji",
        "Finland",
        "France",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Greece",
        "Grenada",
        "Guatemala",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Holy See",
        "Honduras",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Ireland",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Korea (North)",
        "Korea (South)",
        "Kosovo",
        "Kuwait",
        "Kyrgyzstan",
        "Laos",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands",
        "Mauritania",
        "Mauritius",
        "Mexico",
        "Micronesia",
        "Moldova",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Morocco",
        "Mozambique",
        "Myanmar (formerly Burma)",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "North Macedonia (formerly Macedonia)",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Palestine State",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Poland",
        "Portugal",
        "Qatar",
        "Romania",
        "Russia",
        "Rwanda",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan",
        "Suriname",
        "Sweden",
        "Switzerland",
        "Syria",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom",
        "United States of America",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Venezuela",
        "Vietnam",
        "Yemen",
        "Zambia",
        "Zimbabwe",
    ];

    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 100 }, (_, i) => currentYear - i).filter((year) => year <= currentYear - 18);

    const [formData, setFormData] = useState({
        bikeDetails: "",
        modelYear: "",
        fullName: "",
        nationality: "",
        day: "",
        month: "",
        year: "",
        email: "",
        phone: "",
        emirateRegistered: "",
        uaeLicenceHeld: "",
    });
    const formattedDate = `${formData.day} ${formData.month} ${formData.year}`;

    const emiratesOfRegistration = [
        "Abu Dhabi",
        "Dubai",
        "Sharjah",
        "Ajman",
        "Ras Al Khaimah",
        "Fujairah",
        "Umm Al Quwain",
    ];
    const licenceHeldOptions = ["Less than 1 year", "1-2 years", "2-3 years", "3-5 years", "5-10 years", "10+ years"];

    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);

    const [errors, setErrors] = useState({});
    const handleChange = async (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // if (name === "email") validateEmail(value);
        // if (name === "phone") validatePhone(value);

        if (name === "bikeDetails" && value.length > 1) {
            setLoading(true);
            setTimeout(async () => {
                try {
                    const response = await fetch(`https://api.api-ninjas.com/v1/motorcycles?make=${value}`, {
                        headers: {
                            "X-Api-Key": "uDGutevA2jH6i42kTqzLRg==8uvbwqtMptteYxMt",
                        },
                    });
                    if (response.ok) {
                        const data = await response.json();
                        setSuggestions(data);
                    } else {
                        setSuggestions([]);
                    }
                } catch (error) {
                    console.error("Error fetching bike suggestions:", error);
                    setSuggestions([]);
                } finally {
                    setLoading(false);
                }
            }, 1000);
        } else if (name === "bikeDetails" && value.length <= 2) {
            setSuggestions([]);
        }
    };

    // const validateEmail = (email) => {
    //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     if (!emailRegex.test(email)) {
    //         setErrors((prev) => ({ ...prev, email: "Invalid email address" }));
    //     } else {
    //         setErrors((prev) => {
    //             const { email, ...rest } = prev;
    //             return rest;
    //         });
    //     }
    // };

    // const validatePhone = (phone) => {
    //     const phoneRegex = /^(?:\+971|971)\d{7,8}$/;

    //     if (!phoneRegex.test(phone)) {
    //         setErrors((prev) => ({
    //             ...prev,
    //             phone: "Phone number must start with +971 or 971 and contain only digits and max 8 digits",
    //         }));
    //     } else {
    //         setErrors((prev) => {
    //             const { phone, ...rest } = prev;
    //             return rest;
    //         });
    //     }
    // };

    const handleSuggestionClick = (make, model) => {
        setFormData({ ...formData, bikeDetails: `${make} ${model}` });
        setSuggestions([]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // validateEmail(formData.email);
        // validatePhone(formData.phone);

        if (Object.keys(errors).length > 0) {
            setSuccessMessage("Please fix the errors before submitting.");
            return;
        }

        const dataToSubmit = { ...formData, birthDate: formattedDate };
        console.log("Form data:", dataToSubmit);
        console.log("Form data:", formData);
        setSuccessMessage("Submitting your form...");

        try {
            const response = await fetch(`${backendAPI}/api/bike/send-email/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataToSubmit),
            });

            if (response.ok) {
                setSuccessMessage("Form submitted successfully!");
                setFormData({
                    bikeDetails: "",
                    modelYear: "",
                    fullName: "",
                    nationality: "",
                    day: "",
                    month: "",
                    year: "",
                    email: "",
                    phone: "",
                    emirateRegistered: "",
                    uaeLicenceHeld: "",
                });
            } else {
                const errorData = await response.json();
                setSuccessMessage(`Error: ${errorData.error}`);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setSuccessMessage("Something went wrong!");
        } finally {
            setTimeout(() => setSuccessMessage(""), 3000);
        }
    };

    const getMessageClass = () => {
        if (successMessage.includes("Submitting")) return "warning";
        if (successMessage.includes("successfully")) return "success";
        if (successMessage.includes("Error") || successMessage.includes("wrong")) return "error";
        return "";
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <div className="form">
            <div className="container-fluid">
                <div className="back_button">
                    <Link to="/#service">
                        <button>back</button>
                    </Link>
                </div>
                <div className="row title_row">
                    <div className="col-12 title_col">
                        <h1>
                            Get your <span>Bike insurance</span> quotes
                        </h1>
                    </div>
                </div>
                <p className={`success-message ${successMessage ? `show ${getMessageClass()}` : ""}`}>
                    {successMessage || " "}
                </p>

                <div className="form_section">
                    <div className="form_content">
                        <div className="form_title">
                            <i className="bx bx-info-circle"></i>
                            <h4>Tell us about yourself</h4>
                        </div>
                        <div className="container">
                            <form onSubmit={handleSubmit}>
                                <div className="row form_row">
                                    <div className="col-lg-8 item">
                                        <input
                                            type="text"
                                            name="bikeDetails"
                                            placeholder="Enter your Make, Model, and Trim"
                                            value={formData.bikeDetails}
                                            onChange={handleChange}
                                            required
                                        />

                                        {loading && <div className="spinner"></div>}

                                        {suggestions.length > 0 && (
                                            <ul className="suggestions">
                                                {suggestions.map((car, index) => (
                                                    <li
                                                        key={index}
                                                        onClick={() => handleSuggestionClick(car.make, car.model)}
                                                    >
                                                        {car.make} {car.model}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                    <div className="col-lg-4 item">
                                        <select
                                            name="modelYear"
                                            value={formData.modelYear}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="" disabled selected>
                                                Model year
                                            </option>
                                            {modelYear.map((year, index) => (
                                                <option key={index} value={year}>
                                                    {year}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="row form_row">
                                    <div className="col-lg-6 item">
                                        <input
                                            type="text"
                                            name="fullName"
                                            placeholder="Your full name"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-lg-6 item">
                                        <select
                                            name="nationality"
                                            value={formData.nationality}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="" disabled>
                                                Your nationality
                                            </option>
                                            {nationalities.map((nation, index) => (
                                                <option key={index} value={nation}>
                                                    {nation}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="row form_row">
                                    <div className="col-lg-6 item">
                                        <div className="birth">
                                            <select name="day" value={formData.day} onChange={handleChange} required>
                                                <option value="" disabled>
                                                    Day
                                                </option>
                                                {days.map((day, index) => (
                                                    <option key={index} value={day}>
                                                        {day}
                                                    </option>
                                                ))}
                                            </select>
                                            <select name="month" value={formData.month} onChange={handleChange} required>
                                                <option value="" disabled>
                                                    Month
                                                </option>
                                                {months.map((month, index) => (
                                                    <option key={index} value={month}>
                                                        {month}
                                                    </option>
                                                ))}
                                            </select>
                                            <select name="year" value={formData.year} onChange={handleChange} required>
                                                <option value="" disabled>
                                                    Year
                                                </option>
                                                {years.map((year, index) => (
                                                    <option key={index} value={year}>
                                                        {year}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 item">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Your email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                        {/* {errors.email && (
                                            <p className="error-message" style={{ color: "red" }}>
                                                {errors.email}
                                            </p>
                                        )} */}
                                    </div>
                                    <div className="col-lg-3 item">
                                        <select
                                            name="emirateRegistered"
                                            value={formData.emirateRegistered}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="" disabled>
                                                Emirate of registration
                                            </option>
                                            {emiratesOfRegistration.map((item, index) => (
                                                <option key={index} value={item}>
                                                    {item}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="row form_row">
                                    <div className="col-lg-6 item">
                                        <input
                                            type="text"
                                            name="phone"
                                            placeholder="Your Phone no"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                        {/* {errors.phone && (
                                            <p className="error-message" style={{ color: "red" }}>
                                                {errors.phone}
                                            </p>
                                        )} */}
                                    </div>
                                    <div className="col-lg-6 item">
                                        <select
                                            name="uaeLicenceHeld"
                                            value={formData.uaeLicenceHeld}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="" disabled>
                                                UAE licence held for
                                            </option>
                                            {licenceHeldOptions.map((option, index) => (
                                                <option key={index} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="row form_row">
                                    <div className="col-xl-2 col-lg-3 col-12 item">
                                        <button type="submit">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormBike;
