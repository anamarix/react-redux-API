import React from "react";
import { connect } from "react-redux";
import * as usersActions from "../../actions/usersActions";
import * as publicationsActions from "../../actions/publicationsActions";
import { useParams } from "react-router-dom";
import Spinner from "../General/Spinner";
import Fatal from "../General/Fatal";

const { getAll: usersGetAll } = usersActions;
const { getForUser: publicationsGetForUser } = publicationsActions;

const Publications = (props) => {
  const { key } = useParams();

  React.useEffect(() => {
    if (!props.usersReducer.usuarios.length) {
      (async function getThemAll() {
        await props.usersGetAll();
      })();
    }
    if (props.usersReducer.error) {
      return;
    }
    props.publicationsGetForUser(key);
  }, []);

  const displayUser = () => {
    if (props.usersReducer.error) {
      return <Fatal message={props.usersReducer.error} />;
    }
    if (!props.usersReducer.usuarios.length || props.usersReducer.loading) {
      return <Spinner />;
    }
    const name = props.usersReducer.usuarios[key].name;

    return <h1>Publikacje {name}</h1>;
  };

  const displayPublications = () => {
    if (!props.usersReducer.usuarios.length) {
      return;
    }
    if (props.usersReducer.error) {
      return;
    }
    if (props.publicationsReducer.loading) {
      return <Spinner />;
    }
    if (props.publicationsReducer.error) {
      return <Fatal message={props.publicationsReducer.error} />;
    }
    if (!props.publicationsReducer.publications.length) {
      return;
    }
    const {
      publicationsReducer: { publications },
    } = props;

    const publicationMaped = publications.flat();
    const userPosts = publicationMaped.filter(
      (el) => el.userId === props.usersReducer.usuarios[key].id
    );

    return userPosts.map((publication) => (
      <div className="publication_container" key={publication.id}>
        <h2 className="publication_title">{publication.title}</h2>
        <h3 className="publication_body">{publication.body}</h3>
      </div>
    ));
  };
  return (
    <div>
      {displayUser()}
      {displayPublications()}
    </div>
  );
};

const mapStateToProps = ({ usersReducer, publicationsReducer }) => {
  return { usersReducer, publicationsReducer };
};

const mapDispatchToProps = {
  usersGetAll,
  publicationsGetForUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Publications);
