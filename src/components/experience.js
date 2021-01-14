import React from 'react';


const experience = [{
    company: 'Huddl.ai',
    title: 'Back End Developer',
    points: [
        'Developed and Deployed Data pipeline for Suggestions Engine using Apache Kafka',
        'Developed Integrations Dashboard for Developers using Golang, ReactJS, MySQL, and Apache Kafka',
        'Deployed Machine Learning Models as REST endpoints in Kubernetes Cluster using Python Flask',
        'Developed and Deployed a Slackbot for Huddl.ai Meetings platform',
        'Developed, Tested, and Deployed CRUD Microservices using NodeJS, Typescript, Golang, GraphQL, gRPC, MySQL, Apache Kafka & RabbitMQ',
        'Developed Auth adapters for API Gateway in Golang',
    ],
    from:'May 2019',
    to:'Dec 2020',
}, {
    company: 'Darwinbox',
    title: 'Software Engineer',
    points: [
        'Ideated, Developed, and Deployed a voice bot called Darwin which reduced the action time by 2x',
        'Developed a Cache and Invalidation layer for ActiveORM to reduce DB calls in Dashboard by 92%',
        'Converted Monolith into Service Oriented REST Microservices for Scalability',
        'Developed and Implemented XSS & CSRF PHP Yii Middleware for Input Sanitization',
        'Developed a Helpdesk Module for SaaS app using HTML, CSS, JQuery, PHP, and MongoDB',
        'Implemented Encryption on ORM level to make the product GDPR compliant',
        'Authored Developer Guides to ensure code quality',
        'Mentored 9 Interns',
    ],
    from:'May 2017',
    to:'Apr 2019',
}, {
    company: 'Darwinbox',
    title: 'Software Engineer Intern',
    points: [
        'Developed WYSIWYG plugin for PHP Yii using Summernote',
        'Developed AWS S3 Module for PHP Yii Framework',
        'Made the monolith HRMS application state-less by migrating the filesystem to AWS S3',
        'Implemented Interactive Organisation Structure on HTML Canvas using JIT (JavaScript InfoVis Toolkit)',
    ],
    from:'Jan 2017',
    to:'May 2017',
}];

export default () => {

    const [ active, setActive ] = React.useState(0);

    return <div className='mt-5 experience'>
            <div className='container pt-5'>
                <h3>Experience:</h3>
                <div className='row'>
                    <div className='col-md-4 company-container'>
                        <ul className='custom-ul mt-3 p-0'>
                            { experience.map((val, idx) => <li className={'cursor-pointer pt-2 ' + (idx === active ? 'active' : '')} onClick={ () => setActive(idx) } >{val.title} @ <b>{val.company}</b></li>) }
                        </ul>
                    </div>
                    <div className='col-md-8'>
                        <h5> { experience[active].title } </h5>
                        <h6> { experience[active].from } - { experience[active].to } </h6>
                        <ul className='custom-ul'>
                            { experience[active].points.map(val => <li className='custom-li'>{val}</li>) }
                        </ul>
                    </div>
                </div>
            </div>
        </div>;
}