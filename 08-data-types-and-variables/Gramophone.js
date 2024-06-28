function gramophone(bandName, albumName, songName) {
  const fullRotationTime = 2.5;
  const songDur = (albumName.length * bandName.length * songName.length) / 2;

  console.log(`The plate was rotated ${Math.ceil(songDur / 2.5)} times.`);
}
