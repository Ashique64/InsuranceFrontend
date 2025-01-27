import React, { useEffect } from "react";
import "./HealthSection.scss";
import NavBar2 from "../../components/NavBar2/NavBar2";
import Footer2 from "../../components/Footer2/Footer2";
import { useNavigate } from "react-router-dom";

const HealthSection = () => {
    const navigate = useNavigate();
    const handleGetQuotes = () => {
        navigate("/form/health");
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <NavBar2 />
            <div className="health-section">
                <div className="container-fluid container_first">
                    <div className="row first_row">
                        <div className="col-xl-4 col-lg-4 col-md-12 col_1">
                            <div className="car_image">
                                <img src="images/health-section/health-image-1.png" alt="Car-image" />
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-12 col_2">
                            <div className="content">
                                <h4>Get the Best Health Insurance in Dubai and the UAE with Ease</h4>

                                <div className="para">
                                    <p>
                                        You’ve heard the saying, “Health is wealth,” right? It’s true—without good health,
                                        life becomes a challenge. While you can’t buy health, you can invest in protecting
                                        it with reliable health insurance. Health insurance in the UAE is not just a luxury;
                                        it’s a necessity, offering you and your family security when you need it most.
                                    </p>
                                    <p>
                                        At InsuranceBasaar.com, we make finding the right health insurance in Dubai simple
                                        and stress-free. From offering you tailored comparison quotes to helping you choose
                                        coverage that meets your needs and budget, we’ve got you covered. After all, your
                                        peace of mind is worth everything!
                                    </p>
                                </div>

                                <div onClick={handleGetQuotes} className="get_quotes_button">
                                    <button>Get quotes </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid third_container">
                    <div className="row first_row">
                        <div className="title_section">
                            <h4>Why Choose InsuranceBasaar for Your Health Insurance Needs?</h4>
                            <p>
                                At InsuranceBasaar, we are dedicated to providing a smooth and personalized health insurance
                                experience. Here's why you can trust InsuranceBasaar:
                            </p>
                        </div>
                        <div className="row items_row">
                            <div className="col-xl-3 col-lg-3 col-md-6 item_col">
                                <div className="item">
                                    <i className="bx bxs-user-plus"></i>
                                    <h6>Customized Coverage</h6>
                                    <p>
                                        Health insurance plans designed to match your individual or family healthcare needs,
                                        ensuring peace of mind.
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 item_col">
                                <div className="item">
                                    <i className="bx bxs-heart"></i>
                                    <h6>Comprehensive Care</h6>
                                    <p>
                                        Access to a wide range of medical benefits, including consultations, hospital stays,
                                        and preventative care services.
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 item_col">
                                <div className="item">
                                    <i className="bx bxs-wallet"></i>
                                    <h6>Affordable Plans</h6>
                                    <p>
                                        Budget-friendly health insurance solutions without compromising on the quality of
                                        coverage you deserve.
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 item_col">
                                <div className="item">
                                    <i className="bx bxs-gift"></i>
                                    <h6>Valuable Rewards</h6>
                                    <p>
                                        Enjoy perks like health check-up discounts, loyalty programs, and additional
                                        wellness benefits with your plan.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid container_two">
                    <div className="row first_row">
                        <div className="col-xl-8 col-lg-8 col-md-12 col_1">
                            <div className="content">
                                <h4>What Does Health Insurance Cover in the UAE?</h4>
                                <p>
                                    The coverage of your health insurance policy depends on the type of plan you choose, but
                                    a typical comprehensive health insurance plan generally covers a range of medical needs.
                                    These include
                                    <span>
                                        doctor consultations, diagnostic tests, hospital stays, surgeries, emergency
                                        treatments, maternity care, and prescription medications
                                    </span>
                                    . While adhering to policy terms and conditions is essential for successful claims,
                                    having a robust plan ensures financial support during medical emergencies, giving you
                                    peace of mind and access to quality healthcare when you need it the most!
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col_2">
                            <div className="car_image">
                                <img src="images/health-section/health-image-3.png" alt="Health-Insurance" />
                            </div>
                        </div>
                    </div>

                    <div className="row second_row">
                        <div className="title_section">
                            <h4>What Isn’t Covered by Your Health Insurance?</h4>
                            <p>
                                While health insurance offers significant protection, certain conditions or situations fall
                                outside its scope. These exclusions often depend on the type of plan and may require
                                additional coverage. Here are some common examples of what isn’t covered under standard
                                health insurance policies:
                            </p>
                        </div>
                        <div className="items">
                            <div className="row items_row">
                                <div className="col-xl-6 col-lg-6 col-md-12 item_col">
                                    <div className="item">
                                        <p>
                                            <strong>Pre-Existing Conditions (Without Waiting Period):</strong> Medical
                                            expenses related to pre-existing conditions may not be covered immediately
                                            unless the waiting period specified in the policy is completed.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 item_col">
                                    <div className="item">
                                        <p>
                                            <strong>Cosmetic Procedures:</strong> Non-essential cosmetic surgeries or
                                            treatments, such as plastic surgery for aesthetic purposes, are generally
                                            excluded.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 item_col">
                                    <div className="item">
                                        <p>
                                            <strong>Alternative Therapies:</strong> Treatments like acupuncture, homeopathy,
                                            or other alternative medical practices may not be included unless explicitly
                                            stated in the policy.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 item_col">
                                    <div className="item">
                                        <p>
                                            <strong>Self-Inflicted Injuries:</strong> Any medical expenses arising from
                                            self-harm or intentional injuries are excluded from coverage.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 item_col">
                                    <div className="item">
                                        <p>
                                            <strong>Experimental Treatments:</strong> Costs related to unproven or
                                            experimental medical procedures that are not recognized by medical boards may
                                            not be covered.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 item_col">
                                    <div className="item">
                                        <p>
                                            <strong>Acts of War or Natural Disasters:</strong> Medical expenses resulting
                                            from injuries due to acts of war, terrorism, or certain natural disasters may
                                            not be included unless specified in the policy.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid container_fourth">
                    <div className="row first_row">
                        <div className="title_section">
                            <h4>When to Get Health Insurance</h4>
                            <p>
                                Health insurance is a crucial investment that ensures access to quality healthcare while
                                safeguarding your finances. Choosing the right time to secure health insurance can make all
                                the difference in your coverage and costs. Below are some key situations when obtaining
                                health insurance becomes essential:
                            </p>
                        </div>
                        <div className="row items_row">
                            <div className="col-xl-4 col-lg-4 col-md-12 item_col1">
                                <div className="image_section">
                                    <img src="images/health-section/health-image-2.png" alt="" />
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-12 item_col2">
                                <div className="item1">
                                    <p>
                                        <strong>Moving to Dubai or the UAE as an Expatriate:</strong> Health insurance is
                                        mandatory for residents in the UAE. Securing a policy ensures access to healthcare
                                        services and compliance with the country’s legal requirements.
                                    </p>
                                </div>
                                <div className="item1">
                                    <p>
                                        <strong>Before Starting a Family:</strong> Planning for a family? Health insurance
                                        can cover prenatal and postnatal care, delivery costs, and newborn healthcare,
                                        providing financial stability during this life-changing journey.
                                    </p>
                                </div>
                                <div className="item1">
                                    <p>
                                        <strong>Changing Jobs or Relocating:</strong> Transitioning jobs or moving? Ensure
                                        continuity of health coverage to avoid unexpected medical expenses during this
                                        period of change.
                                    </p>
                                </div>
                                <div className="item1">
                                    <p>
                                        <strong>Early in Life:</strong> Getting health insurance at a young age offers
                                        comprehensive coverage at lower premiums. It also helps you build a health insurance
                                        history, ensuring lifelong protection for unforeseen health issues.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="row button_row">
                            <div className="col-md-12 button_col">
                                <div className="button_items">
                                    <i className="bx bx-heart"></i>
                                    <h6>Get quotes in less than a minute</h6>
                                    <button onClick={handleGetQuotes}>get quotes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer2 />
        </>
    );
};

export default HealthSection;
