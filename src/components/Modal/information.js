export const ModalTypes = {
  ADD_DASHBOARD  : 'ADD_DASHBOARD',
  EDIT_DASHBOARD  : 'EDIT_DASHBOARD',
}
export const ModalInfo = {
  [ModalTypes.ADD_DASHBOARD]: {
    title:'Add Dashboard',
    description:`
    When you connect the repository, 
    you will see information about branch, commit, 
    and pull requests in S.Board.`,
  },
  [ModalTypes.EDIT_DASHBOARD]: {
    title:'Edit Dashboard',
    description:`
    When you connect the repository, 
    you will see information about branch, commit, 
    and pull requests in S.Board.`,
  },
}