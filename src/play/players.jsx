import React from 'react';

import { GameEvent, GameNotifier } from './gameNotifier';

export function Players(props) {
  const userName = props.userName;

  const [events, setEvent] = React.useState([]);

  React.useEffect(() => {
    GameNotifier.addHandler(handleGameEvent);

    return () => {
      GameNotifier.removeHandler(handleGameEvent);
    };
  });

  function handleGameEvent(event) {
    setEvent([...events, event]);
  }

  function createMessageArray() {
    const messageArray = [];
    for (const [i, event] of events.entries()) {
      let message = 'unknown';
      if (event.type === GameEvent.Ten) {
        message = `${event.from} is in the top ten with ${event.value.score}!`;
      } else if (event.type === GameEvent.First) {
        message = `${event.from} has the new highest score with ${event.value.score}!`
      } else if (event.type === GameEvent.System) {
        message = event.value.msg;
      }

      messageArray.push(
        <div key={i} className='event'>
          {message}
        </div>
      );
    }
    return messageArray;
  }

  return (
    <div className='players'>
      <div id='player-messages'>{createMessageArray()}</div>
    </div>
  );
}
