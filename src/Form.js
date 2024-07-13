import React from "react";

function Form() {
  const myStyle = {
    color: "black",
    backgroundColor: "gold",
    padding: "80px",
    fontSize: "30px",
    
    margin: "100px"
  };

  
  return (
    <div>
      <form style={myStyle}>
        <h1 className="heading">Registration FORM</h1>
        <br/><br/>
        <label>Enter ur name : </label>
        <input type="text" />
        <br />
        <br />
        <label>Enter ur Father name : </label>
        <input type="text" />
        <br />
        <br />
        <label>Enter ur Mother name : </label>
        <input type="text" />
        <br />
        <br />
        <label>Enter ur age : </label>
        <input type="number" />
        <br />
        <br />
        
        <label>Gender : </label> &nbsp; 
        <input type="radio" id="gender" name="name" value="Male" />&nbsp;
        Male &nbsp; 
        <input type="radio" id="gender" name="name" value="Female" />&nbsp;
        Female &nbsp;  
        <input type="radio" id="gender" name="name" value="Others" />&nbsp;
        Others
        <br></br><br/>
        <label>D.O.B : </label>
        <input type="date"  name="date" />
        <br></br><br/>
        <label>Enter ur address : </label>
        <textarea rows={3} cols={30} />
        <br />
        <br />
        <label>E-mail : </label>
            <input type="email"  name="email"/>
            <br/><br/>
            <label>Mobile : </label>
            <input type="number" name="Mobile" maxLength={10}/>
            <br/><br/>

            <label>Select Ur Course : </label>
            <select name="course">
                <option value="choose a course">Choose a Course</option>
                <option value="BCA">BCA</option>
                <option value="BTECH">BTECH</option>
                <option value="MCA">MCA</option>
                <option value="MTECH">MTECH</option>
                <option value="PH.D-CS">PH.D-CS</option>
            </select>
            <br/><br/>

            <label for="sound knowledge in">Sound Knowledge in : </label>
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" name="WEB-DESIGNING"/>&nbsp;WEB-DESIGNING
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" name="PROGRAMMING"/>&nbsp;PROGRAMMING
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" name="DATABASE"/>&nbsp;DATABASE
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" name="AI/ML"/>&nbsp;AI/ML
            <br/><br/>

            <label for="upload ur pic">Upload Ur image : </label>
            <input type="file" id="upload ur pic" name="upload ur pic"/>
            <br/><br/>

            <input type="checkbox" required/> &nbsp;Click Here To Agree That The Above Informations Are Correct.
            <br/><br/>
        <div className="button">
        <button type="submit"> ✈️ Submit</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="submit">🚀 Reset</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
