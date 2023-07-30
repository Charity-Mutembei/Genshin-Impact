import style from "./HeroSectionMessage.module.css";

function HeroSectionMessage() {
  return (
    <>
      <div className={style.mainBody}>
        <div className="row">
          <div className="col">
            <div className={style.container}>
              <div className="row">
                <div className="col-5">
                  <div className={style.logo}></div>
                </div>
                <div className="col">
                  <div className={style.introduction}>
                    <p>
                      Genshin Impact is a popular action role-playing game
                      developed and published by miHoYo. It was released in
                      September 2020 for various platforms, including
                      PlayStation, PC, Android, and iOS.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-5">
                  <div className={style.logo}></div>
                </div>
                <div className="col">
                  <div className={style.introduction}>
                    <p>
                      The game takes place in the fantasy world of Teyvat, where
                      players assume the role of a Traveler searching for their
                      lost sibling. Along the way, players encounter various
                      characters with unique elemental powers that they can
                      control in combat. The game is known for its beautiful
                      open-world design, real-time combat system, and
                      gacha-style mechanics for obtaining new characters and
                      equipment.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-5">
                  <div className={style.logo}></div>
                </div>
                <div className="col">
                  <div className={style.introduction}>
                    <p>
                      Genshin Impact has gained widespread popularity due to its
                      captivating story, stunning visuals, and frequent content
                      updates that introduce new regions, characters, and
                      events. It also features co-op gameplay, allowing players
                      to team up with friends and tackle challenges together.
                    </p>
                  </div>
                  <div className="learn-more">
                    <div className={style.button}>
                      <a href="#">
                        <button type="button" className="btn btn-light">
                          Learn More
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className={style.image}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSectionMessage;
