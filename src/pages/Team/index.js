import React, { Component } from "react";
import TeamCard from "../../components/TeamCard";
import team from "./team.json";

class TeamPage extends Component {
  state = {
    value: 0,
    team
  };

  render() {
    return (
      <div className="container">
        <br />
        <div className="columns is-multiline">
          {this.state.team.map(member => (
            <div className="column is-half">
              <TeamCard
                devloperName={member.devloperName}
                devloperDesciption={member.devloperDesciption}
                email={member.email}
                linkIn={member.linkIn}
                github={member.github}
                website={member.website}
                photo={member.photo}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default TeamPage;
