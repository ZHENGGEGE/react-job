import React from 'react'
import { NavBar,InputItem,TextareaItem,Button } from 'antd-mobile';
import AvatarSelector from '../../component/avatar-selector/avatar-selector'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import { update } from '../../redux/user.redux'


@connect(
    state => state.user,
    { update }
)

class GeniusInfo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title : '',
            desc : ''
        }
    }
    handleChange(key,val){
        this.setState({
            [key]:val
        })
    }
    render(){
        const redirect = this.props.redirectTo
        const path = this.props.location.pathname
        return(
            <div>
                {redirect&&redirect!==path?<Redirect to={this.props.redirectTo}></Redirect>:null}
                <NavBar mode="dark">Genius完善信息页面</NavBar>
                <AvatarSelector selectAvatar={(imgname) => {
                    this.setState({
                        avatar : imgname
                    })
                }}></AvatarSelector>
                <InputItem onChange={(v)=>this.handleChange('title',v)}>
                    求职岗位
                </InputItem>
                <TextareaItem onChange={(v)=>this.handleChange('desc',v)}
                              title='个人简介'
                              rows={4}
                              autoHeight
                        >
                    
                </TextareaItem>
                <Button 
                    onClick={() => {
                        this.props.update(this.state)
                    }}
                    type='primary'>保存</Button>
            </div>
        )
    }
}

export default GeniusInfo