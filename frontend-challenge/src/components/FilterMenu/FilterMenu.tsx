import React from 'react';

import { Container, MenuItem, MenuContainer } from './FilterMenu.styles';

import {useDispatch} from 'react-redux'
import {updateFilter} from '../../redux/Filter/filter.actions'
import {filterType} from '../../redux/types'

//TODO: Finish the Filter Menu

/*
  update the filter state to the appropriate type when the MenuItem is clicked
*/




const FilterMenu = () => {
  const dispatch = useDispatch()

  return(
    <Container>
    <MenuContainer>
      Filter by: <MenuItem onClick={ ()=>{dispatch(updateFilter(filterType.certificate))} }>Certificate</MenuItem> |
      <MenuItem onClick={ ()=>{dispatch(updateFilter(filterType.bachlores))} }>Bachlores</MenuItem> |
      <MenuItem onClick={ ()=>{dispatch(updateFilter(filterType.masters))} }>Masters</MenuItem> |
      <MenuItem onClick={ ()=>{dispatch(updateFilter(filterType.phd))} }>Ph.D.</MenuItem> |
      <MenuItem onClick={ ()=>{dispatch(updateFilter(filterType.all))} }>All</MenuItem>
    </MenuContainer>
  </Container>
  )

}


export default FilterMenu;
