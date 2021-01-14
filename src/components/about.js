import React from 'react';

const skillListStyle = {
    // 'list-style-image': 'url(https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/coding_6mjf.svg)',
    'list-style-type': '👉', 
    'padding-inline-start': '1ch',
    border: 'none',
};

const skills = ['HTML & (S)CSS', 'Bootstrap', 'Javascript', 'JQuery', 'Typescript', 'React', 'NodeJS', 'Express', 'Python + Flask', 'Java', 'GoLang', 'PHP', 'MySQL', 'MongoDB', 'Elastic Search', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'Apache Kafka', 'GraphQL', 'gRPC', 'Git', 'Spring MVC', 'Yii MVC'];

export default () => {
    return <div className='container mt-5 about'>
            <h3>About me:</h3>
            <p>I have 4 years of experience as a Software Engineer. I love using <a href='https://basecamp.com/shapeup'>Shape Up</a> process to convert ideas into robust and scalable software products. for the past few years, I have been doing full-stack development for Startups that went from prototype to Series-B in a very short time.</p>
            <p>List of technologies I have worked with:</p>
            <ul className='row custom-ul'>
                {skills.map(val => <li className='col-xs-6 col-sm-4 col-md-2 custom-li' style={skillListStyle}>{val}</li>)}
            </ul>
        </div>;
}