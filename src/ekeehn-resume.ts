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
                `Developed WebAPIs (ASP.NET MvC) that act as middleware between Front Office applications and downstream systems.`,
                `Worked closely with business to enhance Know­-Your­-Customer application (C#, Javascript, Oracle) to increase accuracy and efficiency of the 
                banks Anti Money Laundering protocol.`,
                `Created profit sharing application, DoubleCount (C#, Javascript, SQL Server), to help business track 
                loans multiple departments have worked on.`,
                `Trained junior team members on BPM development methodologies and practices.`,
                `Played major role in shaping Development and Deployment procedures within the team.`
            ]
        },
        {
            company_name : "Motorola Solutions",
            job_title : "Software Developer – QA Test Engineer",
            start : new Date(2012,9),
            end : new Date(2014,7),
            description : [
                `Mainbained Android and Windows Mobile testing tools to validate software prior to 
                release to client.`,
                `Designed Testing Scripts to execute hardware tests in conjunction with Automation Software.`
            ]
        }
    ],
    intro : `
        I prioritize clean solutions to complex problems. I am at my best when working with my team to develop code
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
            name : "ModularSchoolExamCreation",
            description : `Application to assist educators in the creation
            of class assignments using Drag-and-Drop mechanic to populate exams with questions.`,
            tech : ["PHP","MySQL","AngularJS"]
        },
        {
            name : "WeatherAPIWrapper",
            description : `Application to display weather information based on
            location and make determinations based on user preferences.`,
            tech : ["NodeJS","Heroku"]
        }
    ],
    userid : "ekeehn",
    resumeName : "TestResume",
    email : "ekeehn01@gmail.com",
    phone : "(516)305-1980",
    skills:[
        {
            name: "Programming Languages",
            types: [
                "C#.NET","NodeJS","C++","ASP.NET MvC"
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
                "Angular 7","VueJS","Bootstrap"
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
    sites:[
        {
            icon: '<i class="fab fa-linkedin fa-2x"></i>',
            type: "LinkedIn",
            url: "www.linkedin.com/in/eric-keehn-32907335"
        },
        {
            icon: '<i class="fab fa-github fa-2x"></i>',
            type: "GitHub",
            url: "https://github.com/spacedunk"
        }
    ]
};