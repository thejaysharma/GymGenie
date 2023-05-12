import React from 'react'
import { Link } from "react-router-dom";

export default function Cards() {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <div className='flex flex-row'>
        <Button>
          {exercise.bodyPart}
        </Button>
        <Button>
          {exercise.target}
        </Button>
      </div>
      <div className=''>
        {exercise.name}
      </div>
    </Link>
  );
}
