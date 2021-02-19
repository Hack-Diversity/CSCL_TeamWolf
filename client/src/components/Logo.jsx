import React, { Component } from 'react'
import styled from 'styled-components'

import logo from '../teamWolf.png'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

class Logo extends Component {
    render() {
        return (
            <Wrapper >
                <img src={logo} width="50" height="50" alt="logo" />
            </Wrapper>
        )
    }
}

export default Logo