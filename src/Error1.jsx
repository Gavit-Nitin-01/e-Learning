import React from 'react'

export default function Error() {
  return (
    <>
      <Wrapper>
      <img src="images/error.svg" alt="error" />
      <NavLink to="/home">
        <Button className="btn"> Go Back</Button>
      </NavLink>
    </Wrapper>
    </>
    
  )
}
const Wrapper = styled.section`
  padding: 9rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .btn {
    font-size: 1.8rem;
    margin-top: 3rem;
  }
`;