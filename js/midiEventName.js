function returnMidiMsgName(status, data) {
  var Msb = status.substring(0, 1);
  if( Msb == 'F') {
    //console.log('SystemMsg:' + Msb);
  } /*else if(Msb == 'B') {
    console.log('B', data);
    return midiEventName.B[data];
    console.log('Mode');
  }*/ else {

    var out = midiEventName[Msb];
    if(Msb=='B') {
      out = midiEventName.B;
    }
      
    return out;
  }
}

var midiEventName = {
  // Channel Message
  // - Voice
  '9': 'NoteOn_',
  '8': 'NoteOff',
  'A': 'KeyPres',
  'B': 'CtlChng',
  'C': 'PrgChng',
  'D': 'ChngPre',
  'E': 'PchBend',

  // - Mode
/*
  'B': {
    '78': 'AlLSndOff_',
    '79': 'RstAllCtl_',
    '7A': 'LocalCtl_',
    '7B': 'AllNoteOff',
    '7C': 'OmniOff___',
    '7D': 'OmniOn____',
    '7E': 'MonoPhoOn_',
    '7F': 'PolyPhoOn_'
  },
*/
  // System Message
  // - Exclusive
  'F0': 'SysEc',
  
  // - Common
  'F1': 'MTC',
  'F2': 'SongPosi',
  'F3': 'SongSlct',
  'F6': 'ChuneReq',
  'F7': 'EoExclus',

  // - Realtime
  'F8': 'TmgClock',
  'FA': 'Start',
  'FB': 'Continue',
  'FC': 'Stop',
  'FE': 'ActvSnse',
  'FF': 'SystemRst'
  
};
