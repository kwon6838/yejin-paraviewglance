import Images from 'paraview-glance/src/samples/images';

const version =
  window.GLANCE_VERSION && window.GLANCE_VERSION !== 'master'
    ? `v${window.GLANCE_VERSION}`
    : 'master';

// prettier-ignore
export default [
  {
    label: '202-t + Edges',
    image: Images.CAD,
    size: '112 KB',
    description: 'T-Handle, Flanged Base, Solid Bar',
    acknowledgement: 'https://www.traceparts.com/',
    datasets: [
      {
        name: '202-t.glance',
        url: `https://raw.githubusercontent.com/Kitware/paraview-glance/${version}/data/202-t.glance`,
      },
    ],
  },
  {
    label: 'Lysozyme.pdb',
    image: Images.Lysozyme,
    size: '135 KB',
    description: 'an enzyme that catalyzes the destruction of the cell walls of certain bacteria, occurring notably in tears and egg white.',
    datasets: [
      {
        name: 'Lysozyme.glance',
        url: `https://raw.githubusercontent.com/Kitware/paraview-glance/${version}/data/lysozyme.glance`,
      },
    ],
  },
  {
    label: 'Tooth.nrrd',
    image: Images.Tooth,
    size: '1.6 MB',
    datasets: [
      {
        name: 'Tooth.glance',
        url: `https://raw.githubusercontent.com/Kitware/paraview-glance/${version}/data/Tooth.glance`,
      },
    ],
  },
  {
    label: 'Engine',
    image: Images.Engine,
    size: '3.1 MB',
    datasets: [
      {
        name: 'Engine.glance',
        url: `https://raw.githubusercontent.com/Kitware/paraview-glance/${version}/data/Engine.glance`,
      },
    ],
    acknowledgement: 'General Electric',
    description: 'CT scan of two cylinders of an engine block.',
  },
  {
    label: 'lidar.vtp',
    image: Images.Lidar,
    size: '5.3 MB',
    description: 'Aerial LIDAR data',
    datasets: [
      {
        name: 'lidar.glance',
        url: `https://raw.githubusercontent.com/Kitware/paraview-glance/${version}/data/lidar.glance`,
      },
    ],
  },
  {
    label: 'SinglePin.vtp',
    image: Images.SinglePin,
    size: '8.2 MB',
    description: 'Mixing Vane inside reactor pin for cooling',
    acknowledgement: "Simulation data from Hydra-TH",
    datasets: [
      {
        name: 'SinglePin.glance',
        url: `https://raw.githubusercontent.com/Kitware/paraview-glance/${version}/data/SinglePin.glance`,
      },
    ],
  },
  {
    label: 'TieFighter.obj',
    image: Images.TieFighter,
    size: '11 MB',
    datasets: [
      {
        name: 'TieFighter.glance',
        url: `https://raw.githubusercontent.com/Kitware/paraview-glance/${version}/data/TieFighter.glance`,
      },
    ],
  },
  {
    label: 'Head.mha',
    image: Images.Head,
    size: '6.2 MB',
    datasets: [
      {
        name: 'head.glance',
        url: `https://raw.githubusercontent.com/Kitware/paraview-glance/${version}/data/head.glance`,
      },
    ],
  },
  {
    label: 'Aneurism.vti',
    image: Images.Aneurism,
    size: '348 KB',
    datasets: [
      {
        name: 'Aneurism.glance',
        url: `https://raw.githubusercontent.com/Kitware/paraview-glance/${version}/data/Aneurism.glance`,
      },
    ],
    acknowledgement: 'Philips Research, Hamburg, Germany',
    description: 'Rotational C-arm x-ray scan of the arteries of the right half of a human head. A contrast agent was injected into the blood and an aneurism is present.',
  },
  // {
  //   label: 'Backpack.vti',
  //   image: Images.Backpack,
  //   size: '8.3 MB',
  //   description: "CT scan of a backpack filled with items.",
  //   acknowledgement: "Kevin Kreeger, Viatronix Inc., USA",
  //   datasets: [
  //     {
  //       name: 'Backpack.vti',
  //       url: 'https://kitware.github.io/vtk-js-datasets/data/vti/backpack.vti',
  //     },
  //   ],
  // },
  // {
  //   label: 'Head MRI CISS',
  //   image: Images.Head,
  //   size: '5.1 MB',
  //   datasets: [
  //     {
  //       name: 'Head.vti',
  //       url: 'https://kitware.github.io/vtk-js-datasets/data/vti/mri_ventricles.vti',
  //     },
  //   ],
  //   acknowledgement: 'Dirk Bartz, VCM, University of Tübingen, Germany',
  //   description: '1.5T MRT 3D CISS dataset of a human head that highlights the CSF (Cerebro-Spinal-Fluid) filled cavities of the head.',
  // },
  // {
  //   label: 'Foot',
  //   image: Images.Foot,
  //   url: 'https://kitware.github.io/vtk-js-datasets/data/vti/foot.vti',
  //   size: '4.3 MB',
  //   datasets: [
  //     {
  //       name: 'Foot.vti',
  //       url: 'https://kitware.github.io/vtk-js-datasets/data/vti/foot.vti',
  //     },
  //   ],
  //   acknowledgement: 'Philips Research, Hamburg, Germany',
  //   description: 'Rotational C-arm x-ray scan of a human foot. Tissue and bone are present in the dataset.',
  // },
];
