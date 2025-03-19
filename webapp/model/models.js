sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], function(JSONModel, Device) {
    "use strict";

    return {
        createDeviceModel: function() {
            var oModel = new JSONModel(Device);
            oModel.setDefaultBindingMode("OneWay");
            return oModel;
        },
        
        createPortfolioModel: function() {
            var oModel = new JSONModel({
                personalInfo: {
                    name: "John Doe",
                    title: "UI5 Developer",
                    email: "john.doe@example.com",
                    phone: "+1 234 567 890",
                    location: "New York, USA",
                    about: "Experienced UI5 developer with a passion for creating intuitive and responsive applications."
                },
                skills: [
                    { name: "SAPUI5/Fiori", level: 95 },
                    { name: "JavaScript", level: 90 },
                    { name: "HTML/CSS", level: 85 },
                    { name: "SAP BTP", level: 80 },
                    { name: "OData", level: 75 },
                    { name: "Git", level: 70 }
                ],
                experience: [
                    {
                        company: "SAP Solutions Inc.",
                        position: "Senior UI5 Developer",
                        period: "2020 - Present",
                        description: "Lead developer for multiple Fiori applications. Responsible for architecture, development, and maintenance."
                    },
                    {
                        company: "Enterprise Systems Co.",
                        position: "Frontend Developer",
                        period: "2017 - 2020",
                        description: "Developed and maintained SAPUI5 applications for various clients in the manufacturing sector."
                    },
                    {
                        company: "Tech Innovations Ltd.",
                        position: "Junior Developer",
                        period: "2015 - 2017",
                        description: "Assisted in the development of web applications using various frameworks including SAPUI5."
                    }
                ],
                projects: [
                    {
                        name: "Inventory Management System",
                        description: "A comprehensive inventory management solution built with SAPUI5, featuring real-time updates and intuitive user interface.",
                        technologies: ["SAPUI5", "OData", "SAP BTP"]
                    },
                    {
                        name: "Employee Portal",
                        description: "A centralized employee portal with various self-service features and personalized dashboards.",
                        technologies: ["SAPUI5", "SAP Fiori", "SAP BTP"]
                    },
                    {
                        name: "Sales Analytics Dashboard",
                        description: "Interactive dashboard for sales analytics with advanced visualizations and filtering capabilities.",
                        technologies: ["SAPUI5", "Chart.js", "OData"]
                    }
                ],
                education: [
                    {
                        degree: "Master of Computer Science",
                        institution: "Tech University",
                        year: "2015"
                    },
                    {
                        degree: "Bachelor of Computer Science",
                        institution: "State University",
                        year: "2013"
                    }
                ]
            });
            return oModel;
        }
    };
});