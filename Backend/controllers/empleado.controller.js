const Empleado = require('../models/empleado');
const empleadoCtrl = {};

// Consultar todos los empleados
empleadoCtrl.getEmpleados = async (req, res) => {
    const empleados = await Empleado.find();
    res.json(empleados);
};

// Registrar un empleado
empleadoCtrl.createEmpleados = async (req, res) => {
    const empleado = new Empleado(req.body);
    await empleado.save();
    res.json({ status: 'Empleado guardado' });
};

// Consultar un empleado por ID
empleadoCtrl.getUnicoEmpleado = async (req, res) => {
    const empleadoUnico = await Empleado.findById(req.params.id);
    res.json(empleadoUnico);
};

// Actualizar un empleado
empleadoCtrl.editarEmpleado = async (req, res) => {
    const { id } = req.params;
    const empleadoEdit = {
        nombre: req.body.nombre,
        cargo: req.body.cargo,
        oficina: req.body.oficina,
        salario: req.body.salario
    };
    await Empleado.findByIdAndUpdate(id, { $set: empleadoEdit }, { new: true });
    res.json({ status: 'Empleado actualizado' });
};

// Eliminar un empleado
empleadoCtrl.eliminarEmpleado = async (req, res) => {
    await Empleado.findByIdAndDelete(req.params.id);
    res.json({ status: 'Empleado eliminado' });
};

module.exports = empleadoCtrl;