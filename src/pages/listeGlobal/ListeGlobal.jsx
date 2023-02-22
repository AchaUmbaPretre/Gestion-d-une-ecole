import React from 'react'
import Sidenav from '../../components/sidenav/Sidenav'
import Topbar from '../../components/topbar/Topbar'
import  './listeGlobal.css'
import { Link } from 'react-router-dom'

const ListeGlobal = () => {
  return (
    <>
        <Topbar />
        <div className="container-ListeGlob">
            <Sidenav />
            <div className="liste-global">
              <h1 className="liste-global-h1">Liste de tous les eleves</h1>
              <div className="liste-global-container">
                <div className="liste-global-top">
                  <input type="search" placeholder="recherche.." className="liste-global-input" />
                  <Link to='' className='liste-global-link'>Liste/classe</Link>
                  <Link to='' className='liste-global-link'>Liste/Filiere</Link>
                  <Link to='' className='liste-global-link'>Par date d'inscrip</Link>
                </div>
                <table>
                  <tr className="liste-global-tr">
                    <th className="liste-global-th">Nom</th>
                    <th className="liste-global-th">Postnom</th>
                    <th className="liste-global-th">Prenom</th>
                    <th className="liste-global-th">Matricule</th>
                    <th className="liste-global-th">Photo</th>
                    <th className="liste-global-th">Date de nais</th>
                    <th className="liste-global-th">Lieu de nais</th>
                    <th className="liste-global-th">Sexe</th>
                    <th className="liste-global-th">Filiere</th>
                    <th className="liste-global-th">Action</th>
                  </tr>
                  <tr>
                    <td>Ndambi</td>
                    <td>Umba</td>
                    <td>Acha</td>
                    <td>12222</td>
                    <td></td>
                    <td>Le 02 dec 1990</td>
                    <td>Le 02 dec 1990</td>
                    <td>M</td>
                    <td>Electricite</td>
                    <td className="liste-global-delete">
                      <i className="fas fa-edit icon-edit"></i>
                      <i className="fas fa-trash-can icon-delete"></i>
                    </td>
                  </tr>

                  <tr>
                    <td>Ndambi</td>
                    <td>Umba</td>
                    <td>Acha</td>
                    <td>12222</td>
                    <td></td>
                    <td>Le 02 dec 1990</td>
                    <td>Le 02 dec 1990</td>
                    <td>M</td>
                    <td>Electricite</td>
                    <td className="liste-global-delete">
                      <i className="fas fa-edit icon-edit"></i>
                      <i className="fas fa-trash-can icon-delete"></i>
                    </td>
                  </tr>

                  <tr>
                    <td>Ndambi</td>
                    <td>Umba</td>
                    <td>Acha</td>
                    <td>12222</td>
                    <td></td>
                    <td>Le 02 dec 1990</td>
                    <td>Le 02 dec 1990</td>
                    <td>M</td>
                    <td>Electricite</td>
                    <td className="liste-global-delete">
                      <i className="fas fa-edit icon-edit"></i>
                      <i className="fas fa-trash-can icon-delete"></i>
                    </td>
                  </tr>

                  <tr>
                    <td>Ndambi</td>
                    <td>Umba</td>
                    <td>Acha</td>
                    <td>12222</td>
                    <td></td>
                    <td>Le 02 dec 1990</td>
                    <td>Le 02 dec 1990</td>
                    <td>M</td>
                    <td>Electricite</td>
                    <td className="liste-global-delete">
                      <i className="fas fa-edit icon-edit"></i>
                      <i className="fas fa-trash-can icon-delete"></i>
                    </td>
                  </tr>

                  <tr>
                    <td>Ndambi</td>
                    <td>Umba</td>
                    <td>Acha</td>
                    <td>12222</td>
                    <td></td>
                    <td>Le 02 dec 1990</td>
                    <td>Le 02 dec 1990</td>
                    <td>M</td>
                    <td>Electricite</td>
                    <td className="liste-global-delete">
                      <i className="fas fa-edit icon-edit"></i>
                      <i className="fas fa-trash-can icon-delete"></i>
                    </td>
                  </tr>

                  <tr>
                    <td>Ndambi</td>
                    <td>Umba</td>
                    <td>Acha</td>
                    <td>12222</td>
                    <td></td>
                    <td>Le 02 dec 1990</td>
                    <td>Le 02 dec 1990</td>
                    <td>M</td>
                    <td>Electricite</td>
                    <td className="liste-global-delete">
                      <i className="fas fa-edit icon-edit"></i>
                      <i className="fas fa-trash-can icon-delete"></i>
                    </td>
                  </tr>

                  <tr>
                    <td>Ndambi</td>
                    <td>Umba</td>
                    <td>Acha</td>
                    <td>12222</td>
                    <td></td>
                    <td>Le 02 dec 1990</td>
                    <td>Le 02 dec 1990</td>
                    <td>M</td>
                    <td>Electricite</td>
                    <td className="liste-global-delete">
                      <i className="fas fa-edit icon-edit"></i>
                      <i className="fas fa-trash-can icon-delete"></i>
                    </td>
                  </tr>

                  <tr>
                    <td>Ndambi</td>
                    <td>Umba</td>
                    <td>Acha</td>
                    <td>12222</td>
                    <td></td>
                    <td>Le 02 dec 1990</td>
                    <td>Le 02 dec 1990</td>
                    <td>M</td>
                    <td>Electricite</td>
                    <td className="liste-global-delete">
                      <i className="fas fa-edit icon-edit"></i>
                      <i className="fas fa-trash-can icon-delete"></i>
                    </td>
                  </tr>

                  <tr>
                    <td>Ndambi</td>
                    <td>Umba</td>
                    <td>Acha</td>
                    <td>12222</td>
                    <td></td>
                    <td>Le 02 dec 1990</td>
                    <td>Le 02 dec 1990</td>
                    <td>M</td>
                    <td>Electricite</td>
                    <td className="liste-global-delete">
                      <i className="fas fa-edit icon-edit"></i>
                      <i className="fas fa-trash-can icon-delete"></i>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
        </div>
    </>
  )
}

export default ListeGlobal