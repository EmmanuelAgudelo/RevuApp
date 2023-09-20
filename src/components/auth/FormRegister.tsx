import { Link } from "react-router-dom";
import { useStore } from "zustand";
import { useFormik } from "formik";
import { FaRegAddressCard } from "react-icons/fa";
import { RiRestaurantLine } from "react-icons/ri";
import { BsBank } from "react-icons/bs";
import { BiUserCircle, BiLockAlt } from "react-icons/bi";
import { HiOutlineMail, HiOutlineDocumentText } from "react-icons/hi";
import { MdSettingsCell } from "react-icons/md";
import { IRegister } from "../../interfaces";
import { RegisterSchema } from "../../schemas";
import { registerStore } from "../../store";

export const FormRegister = () => {
    const { register, isLoading } = useStore(registerStore);

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
            tyc: false
        },
        validationSchema: RegisterSchema,
        onSubmit: (data) => {
            const { tyc, ...data2 } = data;
            register(data2);
        },
    })

    const { names, last_names, email, cellphone, document_type, document, password, name, category } = formik.values;



    return (
        <form onSubmit={formik.handleSubmit} className="form">

            <div className="form__row">
                <div className="form__col">
                    <div className="form__group">
                        <BiUserCircle className="form__icons--orange" size={30} style={{ marginRight: 5 }} />
                        <input
                            type="text"
                            id="names"
                            placeholder="Full name"
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
                        <BiUserCircle className="form__icons--orange" size={30} style={{ marginRight: 5 }} />
                        <input
                            type="text"
                            placeholder="Last names"
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
                        <HiOutlineMail className="form__icons--orange" size={30} style={{ marginRight: 5 }} />
                        <input
                            type="email"
                            id="email"
                            placeholder="Email address"
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
                        <MdSettingsCell className="form__icons--orange" size={30} style={{ marginRight: 5 }} />
                        <input
                            type="text"
                            id="cellphone"
                            placeholder="Contact cell phone"
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
                        <FaRegAddressCard className="form__icons--orange" size={25} style={{ marginRight: 5 }} />
                        <select
                            id="document_type"
                            value={document_type}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                            <option value="">Document type</option>
                            <option value="ID">ID</option>
                        </select>
                    </div>
                    {formik.touched.document_type && formik.errors.document_type && (
                        <small className="form__error">{formik.errors.document_type}</small>
                    )}
                </div>
                <div className="form__col">
                    <div className="form__group">
                        <HiOutlineDocumentText className="form__icons--orange" size={30} style={{ marginRight: 5 }} />
                        <input
                            type="text"
                            id="document"
                            placeholder="ID number"
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
                        <BiLockAlt className="form__icons--orange" size={30} style={{ marginRight: 5 }} />
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
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
                Second step:{" "}
                <span className="register__body__title">
                    Enter your establishment's information
                </span>{" "}
            </h4>

            <div className="form__row">
                <div className="form__col">
                    <div className="form__group">
                        <BsBank className="form__icons--blue" size={25} style={{ marginRight: 5 }} />
                        <input
                            type="text"
                            id="name"
                            placeholder=" Business name"
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
                        <RiRestaurantLine className="form__icons--blue" size={30} style={{ marginRight: 5 }} />
                        <select
                            id="category"
                            value={category}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                            <option value="">Establishment category</option>

                            <option value="BAKERY">Bakery</option>
                            <option value="RESTAURANT">Restaurant</option>
                            <option value="SUPERMARKET">Supermarket</option>
                        </select>
                    </div>
                    {formik.touched.category && formik.errors.category && (
                        <small className="form__error">{formik.errors.category}</small>
                    )}
                </div>
            </div>

            <div className="form__row">
                <div className="form__col">
                    <div className="form__group" style={{ marginTop: 10 }}>
                        <input
                            type="checkbox"
                            id="tyc"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <label className="tyc" >Accept <Link to="/tyc">Terms and Conditions</Link> </label>
                    </div>
                    {formik.touched.tyc && formik.errors.tyc && (
                        <small className="form__error">{formik.errors.tyc}</small>
                    )}
                </div>
            </div>

            {isLoading ?
                <input
                    type="submit"
                    value="Loading ..."
                    className="register__btn"
                    disabled
                /> :
                <input
                    type="submit"
                    value="Sign Up"
                    className="register__btn"
                />}
        </form>
    )
}
