import { useEffect } from "react";
import { useStore } from "zustand";
import { useFormik } from "formik";
import { FaAddressCard,FaCity } from "react-icons/fa";
import { RiCellphoneFill,RiRestaurantLine } from "react-icons/ri";
import { BsBank,BsHouseGear } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { BiUserCircle, BiLockAlt } from "react-icons/bi";
import { HiOutlineMail,HiOutlineDocumentText } from "react-icons/hi";
import { AiOutlinePhone } from "react-icons/ai";
import { IRegister } from "../../interfaces";
import { RegisterSchema } from "../../schemas";
import { registerStore } from "../../store";
import Colombia from "../../json/colombia.json";
import { Link } from "react-router-dom";

export const FormRegister = () => {
    const {register,isLoading} = useStore(registerStore);
  
    const formik = useFormik<IRegister>({
        initialValues: {
            names: '',
            last_names: '',
            email: '',
            cellphone: '',
            document_type: '',
            document: '',
            password: '',
            name: '',
            category: '',
            department: '',
            city: '',
            address: '',
            phone: '',
            tyc: false
        },
        validationSchema: RegisterSchema,
        onSubmit: (data) => {
            const {tyc,...data2} = data;
            register(data2);
        },
    })

    const { names, last_names, email, cellphone, document_type, document, password, name, category, department, city, address, phone,tyc } = formik.values;


    useEffect(() => {
     formik.setFieldValue('city','') 
    }, [department])
    

    return (
        <form onSubmit={formik.handleSubmit} className="form">

            <div className="form__row">
                <div className="form__col">
                    <div className="form__group">
                        <BiUserCircle className="form__icons--orange" size={30} />
                        <input
                            type="text"
                            id="names"
                            placeholder="Nombre completo"
                            value={names}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    {formik.touched.names && formik.errors.names && (
                        <small className="form__error">{formik.errors.names}</small>
                    )}
                </div>
            </div>

            <div className="form__row">
                <div className="form__col">
                    <div className="form__group">
                        <BiUserCircle className="form__icons--orange" size={30} />
                        <input
                            type="text"
                            placeholder="Apellidos"
                            id="last_names"
                            value={last_names}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    {formik.touched.last_names && formik.errors.last_names && (
                        <small className="form__error">{formik.errors.last_names}</small>
                    )}
                </div>
            </div>

            <div className="form__row">
                <div className="form__col">
                    <div className="form__group">
                        <HiOutlineMail className="form__icons--orange" size={30} />
                        <input
                            type="email"
                            id="email"
                            placeholder="Correo electrónico"
                            value={email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    {formik.touched.email && formik.errors.email && (
                        <small className="form__error">{formik.errors.email}</small>
                    )}
                </div>
                <div className="form__col">
                    <div className="form__group">
                        <RiCellphoneFill className="form__icons--orange" size={30} />
                        <input
                            type="text"
                            id="cellphone"
                            placeholder="Celular de contacto"
                            value={cellphone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    {formik.touched.cellphone && formik.errors.cellphone && (
                        <small className="form__error">{formik.errors.cellphone}</small>
                    )}
                </div>
            </div>

            <div className="form__row">
                <div className="form__col">
                    <div className="form__group">
                        <FaAddressCard className="form__icons--orange" size={30} />
                        <select
                            id="document_type"
                            value={document_type}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                            <option value="">Tipo de documento</option>
                            <option value="C.C">Cedula de ciudadania</option>
                            <option value="T.I">Tarjeta de identidad</option>
                            <option value="C.E">Cedula de extranjeria</option>
                        </select>
                    </div>
                    {formik.touched.document_type && formik.errors.document_type && (
                        <small className="form__error">{formik.errors.document_type}</small>
                    )}
                </div>
                <div className="form__col">
                    <div className="form__group">
                        <HiOutlineDocumentText className="form__icons--orange" size={30} />
                        <input
                            type="text"
                            id="document"
                            placeholder="Número de documento"
                            value={document}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    {formik.touched.document && formik.errors.document && (
                        <small className="form__error">{formik.errors.document}</small>
                    )}
                </div>
            </div>

            <div className="form__row">
                <div className="form__col">
                    <div className="form__group">
                        <BiLockAlt className="form__icons--orange" size={30} />
                        <input
                            type="password"
                            id="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    {formik.touched.password && formik.errors.password && (
                        <small className="form__error">{formik.errors.password}</small>
                    )}
                </div>
            </div>

            <h4 className="register__body__title register__body__title--blue">
                Segundo paso:{" "}
                <span className="register__body__title">
                    Ingresa los datos de tu establecimiento
                </span>{" "}
            </h4>

            <div className="form__row">
                <div className="form__col">
                    <div className="form__group">
                        <BsBank className="form__icons--blue" size={30} />
                        <input
                            type="text"
                            id="name"
                            placeholder=" Razón social"
                            value={name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    {formik.touched.name && formik.errors.name && (
                        <small className="form__error">{formik.errors.name}</small>
                    )}
                </div>
            </div>

            <div className="form__row">
                <div className="form__col">
                    <div className="form__group">
                        <BsHouseGear  className="form__icons--blue" size={30} />
                        <select
                            id="department"
                            value={department}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                            <option value="">Departamento</option>
                            {Colombia.map(({departamento})=>(
                                <option key={departamento} value={departamento}>{departamento}</option>
                            ))}
                        </select>
                    </div>
                    {formik.touched.department && formik.errors.department && (
                        <small className="form__error">{formik.errors.department}</small>
                    )}
                </div>
                <div className="form__col">
                    <div className="form__group">
                        <FaCity className="form__icons--blue" size={30}  />
                        <select
                            id="city"
                            value={city}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            disabled={department===''}
                        >
                            <option value="">ciudad</option>
                            {department&&Colombia.find(c=>c.departamento == department)?.ciudades.map((c)=>(
                                <option key={c} value={c}>{c}</option>
                            ))}
                        </select>
                    </div>
                    {formik.touched.city && formik.errors.city && (
                        <small className="form__error">{formik.errors.city}</small>
                    )}
                </div>
            </div>

            <div className="form__row">
                <div className="form__col">
                    <div className="form__group">
                        <GoLocation className="form__icons--blue" size={30} />
                        <input
                            type="text"
                            id="address"
                            placeholder="Dirección principal"
                            value={address}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    {formik.touched.address && formik.errors.address && (
                        <small className="form__error">{formik.errors.address}</small>
                    )}
                </div>
            </div>
            <div className="form__row">
                <div className="form__col">
                    <div className="form__group">
                        <RiRestaurantLine className="form__icons--blue" size={30} />
                        <select
                            id="category"
                            value={category}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                            <option value="">Categoría del establecimiento</option>

                            <option value="1">Comida</option>
                            <option value="2">Supermercados</option>
                        </select>
                    </div>
                    {formik.touched.category && formik.errors.category && (
                        <small className="form__error">{formik.errors.category}</small>
                    )}
                </div>
            </div>

            <div className="form__row">
                <div className="form__col">
                    <div className="form__group">
                        <AiOutlinePhone className="form__icons--blue" size={30} />
                        <input
                            type="text"
                            id="phone"
                            placeholder="Teléfono de contacto"
                            value={phone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    {formik.touched.phone && formik.errors.phone && (
                        <small className="form__error">{formik.errors.phone}</small>
                    )}
                </div>
            </div>
            <div className="form__row">
                <div className="form__col">
                    <div className="form__group" style={{marginTop:10}}>
                        <input
                            type="checkbox"
                            id="tyc"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <label className="tyc" >Aceptar <Link to="/tyc">Términos y condiciones</Link> </label>
                    </div>
                    {formik.touched.tyc && formik.errors.tyc && (
                        <small className="form__error">{formik.errors.tyc}</small>
                    )}
                </div>
            </div>

            {isLoading?
                <input
                type="submit"
                value="Cargando ..."
                className="register__btn"
                disabled
              />:
              <input
                type="submit"
                value="Registrar"
                className="register__btn"
              />}
        </form>
    )
}
