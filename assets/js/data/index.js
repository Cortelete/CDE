// Arquivo: data/index.js
// Este arquivo importa todos os decks individuais e os exporta
// como um único objeto para ser usado pela aplicação.

import { gp } from './gp.js';
import { te } from './te.js';
import { java } from './java.js';
import { ai } from './ai.js';
import { prog } from './prog.js';
import { pmbok } from './pmbok.js';
import { bpmn } from './bpmn.js';
import { pmc } from './pmc.js';
import { pitch } from './pitch.js';
import { comms } from './comms.js';
import { exams } from './exams.js';
import { bizauto } from './bizauto.js';
import { branding } from './branding.js';
import { direitoMilitar } from './direitoMilitar.js';
import { direitoMilitarAvancado } from './direitoMilitarAvancado.js';


export const studyDecks = {
    gp,
    te,
    java,
    ai,
    prog,
    pmbok,
    bpmn,
    pmc,
    pitch,
    comms,
    exams,
    bizauto,
    branding,
    direitoMilitar,
    direitoMilitarAvancado
};