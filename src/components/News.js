import React, { Component } from 'react';
import {  Link} from "react-router-dom"
import {Button ,Comment, Icon, Tooltip, Avatar,Divider } from 'antd';
import moment from 'moment';
class News extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    	 likes: 0,
	    dislikes: 0,
	    action: null,
      list:[
      	{
      		id:'1',
      		title:'新闻0001'
      	},
      	{
      		id:'2',
      		title:'新闻0002'
      	},
      	{
      		id:'3',
      		title:'新闻0003'
      	},
      	{
      		id:'4',
      		title:'新闻0004'
      	},
      	{
      		id:'5',
      		title:'新闻0005'
      	}
      ]
     };
  }
  render() {
  	 const { likes, dislikes, action } = this.state;
  	 const actions = [
      <span key="comment-basic-like">
        <Tooltip title="Like">
          <Icon
            type="like"
            theme={action === 'liked' ? 'filled' : 'outlined'}
            onClick={this.like}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: 'auto' }}>{likes}</span>
      </span>,
      <span key=' key="comment-basic-dislike"'>
        <Tooltip title="Dislike">
          <Icon
            type="dislike"
            theme={action === 'disliked' ? 'filled' : 'outlined'}
            onClick={this.dislike}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: 'auto' }}>{dislikes}</span>
      </span>,
      <span key="comment-basic-reply-to">Reply to</span>,
    ];

    return (
      <div className="page_news" style={{padding:'20px'}}>
        <ul>
        	{
        		this.state.list.map(el=>{
        			return (
        				<li key={el.id}>
        					<Link to={`/detail?aid=${el.id}`}>
        					 <Comment
							        avatar={
							          <Avatar
							            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
							            alt="Han Solo"
							          />
							        }
							        content={
							          <p>
							            We supply a series of design principles, practical patterns and high quality design
							            resources (Sketch and Axure), to help people create their product prototypes beautifully
							            and efficiently.
							          </p>
							        }
							        datetime={
							          <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
							            <span>{moment().fromNow()}</span>
							          </Tooltip>
							        }
							      />
        					</Link>
        					 <Divider dashed />
        				</li>
        			)
        		})
        	}
        </ul>
      
      </div>
    );
  }
}

export default News;