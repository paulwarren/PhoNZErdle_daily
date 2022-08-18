import { BaseModal } from './BaseModal'
import { Trans, useTranslation } from 'react-i18next'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const PhoNZEModal = ({ isOpen, handleClose }: Props) => {
  const { t } = useTranslation()
  return (
    <><style>{`
    table{
     border:1px solid black;
    }
    th{
      padding-left:10px;
      padding-right:5px;    }    
    td{
        text-align: left;
        padding-left:5px;
        padding-right:5px;    }
    .line {
      border-right:  solid 1px #000;
    }
    strong{bold; color:red}
  `}</style><BaseModal title={t('aboutPhoNZE')} isOpen={isOpen} handleClose={handleClose}>
        <p className="text-sm text-gray-500">
          <Trans>
          PhoNZErdle instructions can be found&nbsp; 
			 <a
              href="https://www.intro2psycholing.net/PhoNZErdle/PhoNZErdle_instructions.pdf"
              className="underline font-bold"
              rel="noreferrer" 
              target="_blank"
            >
              here.</a> 
              <br></br>This game uses the PhoNZE transcription system for New Zealand English
            based on&nbsp;

            <a
              href="https://www.degruyter.com/document/doi/10.1515/9783110197181-038/html?lang=en"
              className="underline font-bold"
              rel="noreferrer" 
              target="_blank"
            >
              Bauer & Warren (2004)<br></br>
            </a>
            .&nbsp;Note that when key tips are ON, then hovering over some of the keyboard keys shows the lexical set labels below for 
            vowels and gives examples for less familiar consonant symbols
          </Trans>
          <Trans>
            <table>
              <tr>  <th colSpan={3} className="line">Vowels</th>  <th colSpan={2}>Consonants</th> </tr>
              <tr> <td><b>Symbol</b></td> <td><b>Lexical set(s)</b></td> <td className="line"><b>Examples</b></td>
                <td><b>Symbol</b></td> <td><b>Examples</b></td> </tr>
              <tr>
                <td>/ɘ/</td>
                <td>⎰KIT <br></br>⎱commA, lettER</td>
                <td className="line">sh<strong>i</strong>p<br></br>s<strong>a</strong>lute, pil<strong>o</strong>t</td>
                <td>/p/<br></br>/b/</td>
                <td><strong>p</strong>at<br></br><strong>b</strong>at</td>
              </tr>
              <tr>
                <td>/e/</td>
                <td>DRESS</td>
                <td className="line">b<strong>e</strong>t, st<strong>e</strong>p</td>
                <td>/t/</td>
                <td><strong>t</strong>o<strong>t</strong></td>
              </tr>
              <tr>
                <td>/ɛ/</td>
                <td>TRAP</td>
                <td className="line">b<strong>a</strong>t, h<strong>a</strong>m</td>
                <td>/d/</td>
                <td><strong>d</strong>ark</td>
              </tr>            
              <tr>
                <td>/ɒ/</td>
                <td>LOT, CLOTH</td>
                <td className="line">p<strong>o</strong>t, sw<strong>a</strong>n</td>
                <td>/k/</td>
                <td><strong>c</strong>at</td>
              </tr>              
              <tr>
                <td>/ɐ/</td>
                <td>STRUT</td>
                <td className="line">b<strong>u</strong>t, h<strong>u</strong>m</td>
                <td>/ɡ/</td>
                <td><strong>g</strong>ate</td>
              </tr>              
              <tr>
                <td>/ʊ/</td>
                <td>FOOT</td>
                <td className="line">f<strong>u</strong>ll, l<strong>oo</strong>k</td>
                <td>/f/</td>
                <td><strong>f</strong>ern</td>
              </tr>
              <tr>
                <td>/iː/</td>
                <td>FLEECE</td>
                <td className="line">b<strong>ea</strong>t, k<strong>ey</strong></td>
                <td>/v/</td>
                <td><strong>v</strong>ote</td>
              </tr> 
              <tr>
                <td>/ɐː/</td>
                <td>START, BATH, PALM</td>
                <td className="line">d<strong>a</strong>nce, f<strong>ar</strong></td>
                <td>/s/</td>
                <td><strong>s</strong>ake</td>
              </tr>  
              <tr>
                <td>/oː/</td>
                <td>THOUGHT, NORTH</td>
                <td className="line">p<strong>or</strong>t, fl<strong>oor</strong></td>
                <td>/z/</td>
                <td><strong>z</strong>oom</td>
              </tr>
              <tr>
                <td>/ʉː/</td>
                <td>GOOSE</td>
                <td className="line">b<strong>oo</strong>t, wh<strong>o</strong>m</td>
                <td>/θ/</td>
                <td><strong>th</strong>orn</td>
              </tr>
              <tr>
                <td>/ɵː/</td>
                <td>NURSE</td>
                <td className="line">p<strong>er</strong>t, w<strong>or</strong>k</td>
                <td>/ð/</td>
                <td><strong>th</strong>en</td>
              </tr>
              <tr>
                <td>/æe/</td>
                <td>FACE</td>
                <td className="line">d<strong>a</strong>te, st<strong>ea</strong>k</td>
                <td>/ʃ/</td>
                <td><strong>sh</strong>arp</td>
              </tr>
              <tr>
                <td>/ɑe/</td>
                <td>PRICE</td>
                <td className="line">b<strong>i</strong>te, <strong>I</strong></td>
                <td>/ʒ/</td>
                <td>mea<strong>s</strong>ure</td>
              </tr>
              <tr>
                <td>/oe/</td>
                <td>CHOICE</td>
                <td className="line">b<strong>oy</strong>, v<strong>oi</strong>d</td>
                <td>/m/</td>
                <td><strong>m</strong>ark</td>
              </tr>
              <tr>
                <td>/æʉ/</td>
                <td>MOUTH</td>
                <td className="line">b<strong>ou</strong>t, cr<strong>ow</strong>d</td>
                <td>/n/</td>
                <td><strong>n</strong>et</td>
              </tr>
              <tr>
                <td>/ɐʉ/</td>
                <td>GOAT</td>
                <td className="line">d<strong>o</strong>te, s<strong>oa</strong>p</td>
                <td>/ŋ/</td>
                <td>sa<strong>ng</strong></td>
              </tr>
              <tr>
                <td>/iɘ/</td>
                <td>NEAR</td>
                <td className="line">p<strong>ier</strong>, b<strong>eer</strong></td>
                <td>/l/</td>
                <td><strong>l</strong>eave</td>
              </tr>   
              <tr>
                <td>/eɘ/</td>
                <td>SQUARE</td>
                <td className="line">l<strong>air</strong>, c<strong>are</strong></td>
                <td>/ɹ/</td>
                <td><strong>r</strong>ed</td>
              </tr> 
              <tr>
                <td>/ʉɘ/</td>
                <td>CURE</td>
                <td className="line">c<strong>ure</strong>, f<strong>u</strong>ry</td>
                <td>/w/</td>
                <td><strong>w</strong>ine</td>
              </tr> 
              <tr>
                <td>/i/</td>
                <td>happY</td>
                <td className="line">cit<strong>y</strong>, smell<strong>y</strong></td>
                <td>/j/</td>
                <td><strong>y</strong>ard</td>
              </tr>
              <tr>  
              <td></td>
                <td></td>
                <td className="line"></td>
                <td>/h/</td>
                <td><strong>h</strong>at</td>
              </tr>      
              <tr>  
              <td></td>
                <td></td>
                <td className="line"></td>
                <td>/ʧ/</td>
                <td><strong>ch</strong>ap</td>
              </tr>  
              <tr>  
              <td></td>
                <td></td>
                <td className="line"></td>
                <td>/ʤ/</td>
                <td><strong>j</strong>og</td>
              </tr>    
              </table>
          </Trans>
        </p>
      </BaseModal></>
  )
}
