import React from 'react';
import { PlayCircleOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { Link} from 'react-router-dom';

const { Meta } = Card;
const Wishlist = () => (
<div style={{ background: 'black', padding: '20px' }}>
    <div style={{ display: 'flex', flexWrap: 'wrap',justifyContent: 'center'}}>
     
        <Card
          key={0}
          style={{ width: 300, margin: '20px 10px' , backgroundColor:'white'}}
          cover={<img alt="example" src="../thumbnails/never.jpg" style={{maxHeight:'350px'}}/>}
          actions={[
            <Link to="http://localhost:3000/videos/never" key="play" >
              <PlayCircleOutlined style={{ fontSize: '36px', color: 'red' }} />
            </Link>
          ]}
        >
          <Meta
           
            title="Never Gonna Give You Up"
            description="Never Gonna Let You Down"
          />
        </Card> 
        <Card
          key={0}
          style={{ width: 300, margin: '20px 10px' , backgroundColor:'white'}}
          cover={<img alt="example" src="../thumbnails/maya.png" style={{maxHeight:'350px'}} />}
          actions={[
            <Link to="http://localhost:3000/videos/maya" key="play">
              <PlayCircleOutlined style={{ fontSize: '36px', color: 'red' }} />
            </Link>
          ]}
        >
          <Meta

            title="Mayabono Biharini Horini"
            description="Mayabono Biharini Horini"
          />
        </Card>
        <Card
          key={0}
          style={{ width: 300, margin: '20px 10px' , backgroundColor:'white'}}
          cover={<img alt="example" src="../thumbnails/bigbuck.jpg" style={{maxHeight:'350px'}} />}
          actions={[
            <Link to="http://localhost:3000/videos/bigbuck" key="play">
              <PlayCircleOutlined style={{ fontSize: '36px', color: 'red' }} />
            </Link>
          ]}
        >
          <Meta
            
            title="Big Buck Bunny"
            description="Big Buck Bunny"
          />
        </Card>
        <Card
          key={0}
          style={{ width: 300, margin: '20px 10px' , backgroundColor:'white'}}
          cover={<img alt="example" src="../thumbnails/nature.jpeg" style={{maxHeight:'350px'}} />}
          actions={[
            <Link to="http://localhost:3000/videos/nature" key="play">
              <PlayCircleOutlined style={{ fontSize: '36px', color: 'red' }} />
            </Link>
          ]}
        >
          <Meta
           
            title="Nature"
            description="Nature"
          />
        </Card>
        <Card
          key={0}
          style={{ width: 300, margin: '20px 10px', backgroundColor:'white' }}
          cover={<img alt="example" src="../thumbnails/porsche.jpeg" style={{maxHeight:'350px'}} />}
          actions={[
            <Link to="http://localhost:3000/videos/porsche" key="play">
              <PlayCircleOutlined style={{ fontSize: '36px', color: 'red' }} />
            </Link>
          ]}
        >
          <Meta
           
            title="Porsche 911 GT"
            description="Porsche 911 GT"
          />
        </Card>
        <Card
          key={0}
          style={{ width: 300, margin: '20px 10px' , backgroundColor:'white'}}
          cover={<img alt="example" src="../thumbnails/alaska.jpeg" style={{maxHeight:'350px'}} />}
          actions={[
            <Link to="http://localhost:3000/videos/alaska" key="play">
              <PlayCircleOutlined style={{ fontSize: '36px', color: 'red' }} />
            </Link>
          ]}
        >
          <Meta
            
            title="Alaska"
            description="Alaska"
          />
        </Card>
        <Card
          key={0}
          style={{ width: 300, margin: '20px 10px', backgroundColor:'white' }}
          cover={<img alt="example"src="../thumbnails/japan.jpeg" style={{maxHeight:'350px'}}/>}
          actions={[
            <Link to="http://localhost:3000/videos/japan" key="play">
              <PlayCircleOutlined style={{ fontSize: '36px', color: 'red' }} />
            </Link>
          ]}
        >
          <Meta
            
            title="Welcome To Japan"
            description="Welcome To Japan"
          />
        </Card>
        <Card
          key={0}
          style={{ width: 300, margin: '20px 10px' , backgroundColor:'white'}}
          cover={<img alt="example" src="../thumbnails/la.jpeg" style={{maxHeight:'350px'}} />}
          actions={[
            <Link to="http://localhost:3000/videos/la" key="play">
              <PlayCircleOutlined style={{ fontSize: '36px', color: 'red' }} />
            </Link>
          ]}
        >
          <Meta
            
            title="Los Angeles "
            description="Los Angeles"
          />
        </Card>
     
    </div>
  </div>
);
export default Wishlist;