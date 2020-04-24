import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

// https://reactstrap.github.io/

const items = [
    {
        src: 'https://media.thaigov.go.th/uploads/thumbnail/news/2020/04/IMG_28340_20200402154724000000.jpg',
        header: 'Covid-19',
        key: '1'
    },
    {
        src: 'https://d2v9ipibika81v.cloudfront.net/uploads/sites/90/Add-a-heading-2.png',
        header: 'ทีมเเพทย์พร้อมออกศึกสู้ Covid-19',
        key: '2'
    },
    {
        src: 'https://thethaiger.com/wp-content/uploads/2020/03/SCMP.jpg',
        header: 'ศบค. ออกมาชี้แจ้ง และดูแลอย่างใกล้ชิด',
        key: '3'
    }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;