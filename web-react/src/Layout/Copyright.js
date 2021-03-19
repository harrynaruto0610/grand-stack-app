/*eslint-disable*/
import React from 'react'
import { Typography, Link as MUILink, } from '@material-ui/core'

export default function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <MUILink color="inherit" href="https://grandstack.io/">
                People Search App
      </MUILink>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}