import React from 'react'
import Bar from './Bar';
import Img from './Img'
import Footer from './Footer';
import './Home.css'

const Home = props => {

    return (
        <div>
            <Bar />
            <Img />
            <br />
            <div className="data">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/mFKoeai0y8s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <br />
                <br />


                <p>
                    <strong>ไวัรสโคโรนา (Coronavirus)</strong>
                    &nbsp;เป็นไวรัสที่ถูกพบครั้งแรกในปี 1960 แต่ยังไม่ทราบแหล่งที่มาอย่างชัดเจนว่ามาจากที่ใด
                    แต่เป็นไวรัสที่สามารถติดเชื้อได้ทั้งในมนุษย์และสัตว์ ปัจจุบันมีการค้นพบไวรัสสายพันธุ์นี้แล้วทั้งหมด 6 สายพันธุ์
                    ส่วนสายพันธุ์ที่กำลังแพร่ระบาดหนักทั่วโลกตอนนี้เป็นสายพันธุ์ที่ยังไม่เคยพบมาก่อน คือ สายพันธุ์ที่ 7 จึงถูกเรียกว่าเป็น “
                <strong>ไวรัสโคโรนาสายพันธุ์ใหม่</strong>”
                และในภายหลังถูกตั้งชื่ออย่างเป็นทางการว่า “<strong>
                        โควิด </strong>”
                  <strong>COVID-19</strong> นั่นเอง
                   <p> <strong>อาการเมื่อติดเชื้อไวรัสโคโรนาสายพันธุ์ใหม่ หรือโควิด-19
                         ข้อมูลจาก องค์การอนามัยโลก ระบุว่าอาการโควิด-19 ที่สังเกตได้ง่าย ๆ
                       ด้วยตัวเองมี 5 อาการหลัก ๆ ด้วยกัน ดังนี้ </strong>

                        มีไข้
                        เจ็บคอ
                        ไอแห้ง ๆ
                        น้ำมูกไหล
                        หายใจเหนื่อยหอบ </p>
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default Home;