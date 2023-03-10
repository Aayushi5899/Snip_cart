/* import { DatePicker } from "antd";

export default function MyCard(){
   
   
    return(
        <DatePicker />
    )
} */

import React, {useState} from "react";
import { Card, Col, Typography, Button } from "antd";

const {Paragraph} = Typography;

export default function MyCard(props) {
    const [ellipsis, setEllipsis] = useState(true)

  return (
    <Col className="gutter-row" xs={24} sm={12} xl={6}>
      <div style={{marginBottom:"10px", marginTop:"10px", paddingLeft:"10px", paddingRight:"10px"}}>
        <Card hoverable title={props.title} extra={<a href="#">More</a>}>
          <Paragraph ellipsis={ellipsis ?{row:3, expandable:true, symbol:'more'}:false}>
          {props.content}
          </Paragraph>
          <Button type="primary" shape="round" onClick={()=>{setEllipsis(!ellipsis)}}>Read</Button>
        </Card>
      </div>
    </Col>
  );
}