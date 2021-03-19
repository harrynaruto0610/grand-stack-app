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
    maxWidth: 700,
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

const GET_USER = gql`
  query usersPaginateQuery(
    $first: Int
    $offset: Int
    $orderBy: [_UserOrdering]
    $filter: _UserFilter
  ) {
    User(first: $first, offset: $offset, orderBy: $orderBy, filter: $filter) {
      id: userId
      name
      avgStars
      numReviews
    }
  }
`

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

// query personPaginateQuery(
//   $uuid: String
// ) {
//   Person(uuid: $uuid) {
//     uuid
//     name
//   }
// }

function PersonList(props) {
  const { classes } = props
  const { loading, data, error } = useQuery(GET_PERSON, {
    // variables: {
    //   first: rowsPerPage,
    //   offset: rowsPerPage * page,
    //   orderBy: orderBy + '_' + order,
    //   filter: getFilter(),
    // },
  })

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
  const { loading, data, error } = useQuery(GET_ProjectDetail, {
    // variables: {
    //   first: rowsPerPage,
    //   offset: rowsPerPage * page,
    //   orderBy: orderBy + '_' + order,
    //   filter: getFilter(),
    // },
  })
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






function UserList(props) {
  const { classes } = props
  const [order, setOrder] = React.useState('asc')
  const [orderBy, setOrderBy] = React.useState('name')
  const [page] = React.useState(0)
  const [rowsPerPage] = React.useState(10)
  const [filterState, setFilterState] = React.useState({ usernameFilter: '' })

  const getFilter = () => {
    return filterState.usernameFilter.length > 0
      ? { name_contains: filterState.usernameFilter }
      : {}
  }

  const { loading, data, error } = useQuery(GET_USER, {
    variables: {
      first: rowsPerPage,
      offset: rowsPerPage * page,
      orderBy: orderBy + '_' + order,
      filter: getFilter(),
    },
  })

  const handleSortRequest = (property) => {
    const newOrderBy = property
    let newOrder = 'desc'

    if (orderBy === property && order === 'desc') {
      newOrder = 'asc'
    }

    setOrder(newOrder)
    setOrderBy(newOrderBy)
  }

  const handleFilterChange = (filterName) => (event) => {
    const val = event.target.value

    setFilterState((oldFilterState) => ({
      ...oldFilterState,
      [filterName]: val,
    }))
  }

  return (
    <Paper className={classes.root}>
      <Title>User List</Title>
      <TextField
        id="search"
        label="User Name Contains"
        className={classes.textField}
        value={filterState.usernameFilter}
        onChange={handleFilterChange('usernameFilter')}
        margin="normal"
        variant="outlined"
        type="text"
        InputProps={{
          className: classes.input,
        }}
      />
      {loading && !error && <p>Loading...</p>}
      {error && !loading && <p>Error</p>}
      {data && !loading && !error && (
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell
                key="name"
                sortDirection={orderBy === 'name' ? order : false}
              >
                <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                  <TableSortLabel
                    active={orderBy === 'name'}
                    direction={order}
                    onClick={() => handleSortRequest('name')}
                  >
                    Name
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
              <TableCell
                key="avgStars"
                sortDirection={orderBy === 'avgStars' ? order : false}
              >
                <Tooltip title="Sort" placement="bottom-end" enterDelay={300}>
                  <TableSortLabel
                    active={orderBy === 'avgStars'}
                    direction={order}
                    onClick={() => handleSortRequest('avgStars')}
                  >
                    Average Stars
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
              <TableCell
                key="numReviews"
                sortDirection={orderBy === 'numReviews' ? order : false}
              >
                <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                  <TableSortLabel
                    active={orderBy === 'numReviews'}
                    direction={order}
                    onClick={() => handleSortRequest('numReviews')}
                  >
                    Number of Reviews
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.User.map((n) => {
              return (
                <TableRow key={n.id}>
                  <TableCell component="th" scope="row">
                    {n.name}
                  </TableCell>
                  <TableCell>
                    {n.avgStars ? n.avgStars.toFixed(2) : '-'}
                  </TableCell>
                  <TableCell>{n.numReviews}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      )}
    </Paper>
  )
}

export default withStyles(styles)(PeopleSearchDataList)
// export default withStyles(styles)(UserList)
