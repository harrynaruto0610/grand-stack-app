/*eslint-disable*/
import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { withStyles } from '@material-ui/core/styles'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  Paper,
  TableSortLabel,
  TextField,
} from '@material-ui/core'

import Title from './Title'

const styles = (theme) => ({
  root: {
    maxWidth: "100%",
    marginTop: theme.spacing(3),
    overflowX: 'auto',
    margin: 'auto',
  },
  table: {
    minWidth: 700,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    minWidth: 300,
  },
})
const GET_PERSON = gql`
{
  Person{
    uuid
    name
    first_name
    middle_name
    last_name
    date_of_birth
    gender
    profile_image_url
    resume_url
    title
    social_link_name
    url
    provider_name
    video_url
  }
}
`

const GET_ProjectDetail = gql`
{
  ProjectDetail{
    uuid
    end_date
    end_date_confirmed_flag
    project_name
    project_description
    manager_name
    manager_emailid
    manager_country_code
    manager_phone_number
    project_start_date
    project_end_date
    current_project_flag
  }
}
`

function PersonList(props) {
  const { classes } = props
  const { loading, data, error } = useQuery(GET_PERSON, {})

  console.log("data:", data);

  return (
    <Paper className={classes.root}>
      <Title>Person List</Title>
      {loading && !error && <p>Loading...</p>}
      {error && !loading && <p>Error</p>}
      {data && !loading && !error && (
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell key="No">No</TableCell>
              <TableCell key="UUID">UUID</TableCell>
              <TableCell key="name">name</TableCell>
              <TableCell key="first_name">first_name</TableCell>
              <TableCell key="middle_name">middle_name</TableCell>
              <TableCell key="last_name">last_name</TableCell>
              <TableCell key="date_of_birth">date_of_birth</TableCell>
              <TableCell key="gender">gender</TableCell>
              <TableCell key="profile_image_url">profile_image_url</TableCell>
              <TableCell key="resume_url">resume_url</TableCell>
              <TableCell key="title">title</TableCell>
              <TableCell key="social_link_name">social_link_name</TableCell>
              <TableCell key="url">url</TableCell>
              <TableCell key="provider_name">provider_name</TableCell>
              <TableCell key="video_url">video_url</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.Person.map((n, index) => {
              return (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell>
                    {n.uuid}
                  </TableCell>
                  <TableCell >{n.name}</TableCell>
                  <TableCell >{n.first_name}</TableCell>
                  <TableCell >{n.middle_name}</TableCell>
                  <TableCell >{n.last_name}</TableCell>
                  <TableCell >{n.date_of_birth}</TableCell>
                  <TableCell >{n.gender}</TableCell>
                  <TableCell >{n.profile_image_url}</TableCell>
                  <TableCell >{n.resume_url}</TableCell>
                  <TableCell >{n.title}</TableCell>
                  <TableCell >{n.social_link_name}</TableCell>
                  <TableCell >{n.url}</TableCell>
                  <TableCell >{n.provider_name}</TableCell>
                  <TableCell >{n.video_url}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      )}
    </Paper>
  )

}

function ProjectDetailList(props) {
  const { classes } = props
  const { loading, data, error } = useQuery(GET_ProjectDetail, {})
  console.log("data:", data);

  return (
    <Paper className={classes.root}>
      <Title>Project Detail List</Title>
      {loading && !error && <p>Loading...</p>}
      {error && !loading && <p>Error</p>}
      {data && !loading && !error && (

        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell key="No">No</TableCell>
              <TableCell key="UUID">UUID</TableCell>
              <TableCell key="name">end_date</TableCell>
              <TableCell key="first_name">end_date_confirmed_flag</TableCell>
              <TableCell key="middle_name">project_name</TableCell>
              <TableCell key="last_name">project_description</TableCell>
              <TableCell key="date_of_birth">manager_name</TableCell>
              <TableCell key="gender">manager_emailid</TableCell>
              <TableCell key="profile_image_url">manager_country_code</TableCell>
              <TableCell key="resume_url">manager_phone_number</TableCell>
              <TableCell key="title">project_start_date</TableCell>
              <TableCell key="social_link_name">project_end_date</TableCell>
              <TableCell key="url">current_project_flag</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.ProjectDetail.map((n, index) => {
              return (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell>
                    {n.uuid}
                  </TableCell>
                  <TableCell >{n.end_date}</TableCell>
                  <TableCell >{n.end_date_confirmed_flag}</TableCell>
                  <TableCell >{n.project_name}</TableCell>
                  <TableCell >{n.project_description}</TableCell>
                  <TableCell >{n.manager_name}</TableCell>
                  <TableCell >{n.manager_emailid}</TableCell>
                  <TableCell >{n.manager_country_code}</TableCell>
                  <TableCell >{n.manager_phone_number}</TableCell>
                  <TableCell >{n.project_start_date}</TableCell>
                  <TableCell >{n.project_end_date}</TableCell>
                  <TableCell >{n.current_project_flag}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      )}
    </Paper>
  )

}

function PeopleSearchDataList() {
  return (<>
    <PersonList />
    <ProjectDetailList />
  </>)
}

export default withStyles(styles)(PersonList)
// export default withStyles(styles)(UserList)
