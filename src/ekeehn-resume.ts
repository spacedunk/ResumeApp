import { UserResume } from './UserResume';

export const EKEEHN : UserResume = {
    addr : {
        address1 : "429 Franklin Ave.",
        address2 : "",
        city : "Hewlett",
        state : "NY",
        zip : "11557"
    },
    exp : [
        {
            company_name : "Sumitomo Mitsui Banking Corp.",
            job_title : "AVP - Junior Software Developer",
            start : new Date(2014,7),
            end : null,
            description : [
                `Improved Know­Your­Customer System (C#, Javascript, Oracle)  to increase efficiency of the 
                banks Anti Money Laundering protocol.`,
                `Created profit sharing application, DoubleCount (C#, Javascript, SQL Server), to help track 
                loans multiple departments have worked on.`,
                `Deployed and Maintained IIS Web Services as middleware between Front­End application and 
                downstream systems`,
                `Created profit sharing application, DoubleCount (C#, Javascript, SQL Server), to help track 
                loans multiple departments have worked on.`,
                `Deployed and Maintained IIS Web Services as middleware between Front­End application and 
                downstream systems`
            ]
        },
        {
            company_name : "Motorola Solutions",
            job_title : "Software Developer – QA Test Engineer",
            start : new Date(2012,9),
            end : new Date(2014,7),
            description : [
                `Developed Android (Java) and Windows Mobile (C#) testing tools to validate software prior to 
                release to client.`,
                `Designed Testing Scripts (C++) to execute tests in conjunction with Automation Software.`,
                `Improved tests based on feedback from customers thus increasing the reliability and reputation 
                of the product.Worked with Marketing Department to benchmark products for use in sales to 
                the customer`
            ]
        }
    ],
    intro : `
        I prioritize clean solutions to complex problems. I am at my best when working with the team to develop code
        that meets all standards and requirements in order to help the business grow and succeed.
    `,
    name : "Eric Keehn",
    schools : [{
        name : "NYU-POLY",
        degree : 'B.S. - Computer Engineering',
        start : new Date(2008,0),
        end : new Date(2012,0)
    }],
    proj : [
        {
            name : "WeatherAPIWrapper",
            description : `Application to display weather information based on
            location and make determinations based on user preferences.`,
            tech : ["NodeJS","Heroku"]
        },
        {
            name : "ModularSchoolExamCreation",
            description : `Application to assist educators in the creation
            of assessment exams using Drag-and-Drop mechanic to populate exams with questions.`,
            tech : ["PHP","MySQL","AngularJS"]
        }
    ],
    userid : "ekeehn",
    resumeName : "TestResume",
    email : "ekeehn@gmail.com",
    phone : "(516)305-1980",
    skills:[
        {
            name: "Programming Languages",
            types: [
                "C#.NET","NodeJS","C++"
            ]
        },
        {
            name: "Operating Systems",
            types: [
                "Linux Mint / Ubuntu","Windows (7/10)","Windows Server 2003-2012"
            ]
        },
        {
            name: "JS Frameworks",
            types: [
                "AngularJS","Angular 7","VueJS","Bootstrap"
            ]
        },
        {
            name: "Databases",
            types: [
                "SQL Server 2008","Oracle 12c","MySQL"
            ]
        },
        {
            name: "Source Control",
            types: [
                "Perforce","Git","IBM Rational Clearcase"
            ]
        },
        {
            name: "Cloud Platforms",
            types: [
                "Heroku"
            ]
        }
    ],
    sites:[]
};