import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, DropdownSection } from "@nextui-org/react";
import { IconChevronDown, IconFolderPlus, IconListTree, IconReportSearch, IconEye } from '@tabler/icons-react';
import { Chip, Avatar } from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../auth/Context/Store';
// LOCALES
import the_way_logo_dos from '../../assets/the_way_logo_dos.png';

export const Navbars = () => {
  const navigate = useNavigate();
  const { user, setUser, setLogged } = useStore();


  const onNavigate = option => {
    if (option) return navigate(`/${option}`);
  }

  const onLogout = () => {
    setUser({}),
      setLogged(false),
      onNavigate('login')
    localStorage.clear();
  }

  return (
    <Navbar className="shadow-md">
      <NavbarContent className="flex gap-5" justify="center">
        <NavbarBrand >
          <img src={the_way_logo_dos} width={100} alt="logotipo the-way" />
        </NavbarBrand>

        {/* FUNCIONES SUCURSALES */}
        <Button
          disableRipple
          className="p-0 bg-transparent data-[hover=true]:bg-transparent"
          radius="sm"
          onClick={() => onNavigate('home')}
          variant="light"
        >
          <span className="text-[#152026] font-bold">Home</span>
        </Button>
        <Dropdown>
          <DropdownTrigger>
            <Button
              disableRipple
              className="p-0 bg-transparent data-[hover=true]:bg-transparent"
              endContent={<IconChevronDown color="gray" size={16} />}
              radius="sm"
              variant="light"
            >
              <span className="text-[#152026] font-bold">Sucursales</span>
            </Button>
          </DropdownTrigger>
          <DropdownMenu variant="faded" aria-label="Dropdown menu with description">
            <DropdownSection title="Funciones" showDivider>
              <DropdownItem
                key="asignar-usuarios"
                description="Colaboradores a sucursales"
                onClick={() => onNavigate('sucursales')}
                startContent={<IconFolderPlus className="text-red-700" />}
              >
                Asignar
              </DropdownItem>
              <DropdownItem
                key="listado-sucursales"
                description="Sucursales disponibles"
                onClick={() => onNavigate('listado-sucursales')}
                startContent={<IconListTree className="text-purple-700" />}
              >
                Listado
              </DropdownItem>
            </DropdownSection>

            <DropdownSection title="Consultas">
              <DropdownItem
                key="consulta-por-colaborador"
                description="Por Colaborador"
                startContent={<IconReportSearch className="text-green-700" />}
              >
                Sucursales
              </DropdownItem>
              <DropdownItem
                key="consulta-por-sucursal"
                description="Por Sucursal"
                startContent={<IconReportSearch className="text-yellow-700" />}
              >
                Colaboradores
              </DropdownItem>

            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
        {/* FIN SUCURSALES */}


        {/* FUNCIONES TRANSPORTES */}
        <Dropdown>
          <DropdownTrigger>
            <Button
              disableRipple
              className="p-0 bg-transparent data-[hover=true]:bg-transparent"
              endContent={<IconChevronDown color="gray" size={16} />}
              radius="sm"
              variant="light"
            >
              <span className="text-[#152026] font-bold">Transporte</span>
            </Button>
          </DropdownTrigger>
          <DropdownMenu variant="faded" aria-label="Dropdown menu with description">
            <DropdownSection title="Funciones" showDivider>
              <DropdownItem
                key="transportistas"
                description="Datos generales y tarifas."
                onClick={() => onNavigate('transportes')}
                startContent={<IconEye className="text-sky-700" />}
              >
                Ver
              </DropdownItem>
            </DropdownSection>

            <DropdownSection title="Consultas">
              <DropdownItem
                key="consulta-por-transportista"
                description="Viajes por cada transportista."
                startContent={<IconReportSearch className="text-green-700" />}
              >
                Detalle
              </DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
        {/* FIN TRANSPORTES */}


        {/* FUNCIONES VIAJES */}
        <Dropdown>
          <DropdownTrigger>
            <Button
              disableRipple
              className="p-0 bg-transparent data-[hover=true]:bg-transparent"
              endContent={<IconChevronDown color="gray" size={16} />}
              radius="sm"
              variant="light"
            >
              <span className="text-[#152026] font-bold">Viajes</span>
            </Button>
          </DropdownTrigger>
          <DropdownMenu variant="faded" aria-label="Dropdown menu with description">
            <DropdownSection title="Funciones" showDivider>
              <DropdownItem
                key="crear-viajes"
                description="Solicitud de viaje."
                onClick={() => onNavigate('viajes')}
                startContent={<IconFolderPlus className="text-brown-700" />}
              >
                Crear
              </DropdownItem>
              <DropdownItem
                key="listado-viajes"
                description="Solciitudes realizadas."
                startContent={<IconListTree className="text-orange-700" />}
              >
                Listar
              </DropdownItem>
            </DropdownSection>

            <DropdownSection title="Consultas">
              <DropdownItem
                key="consulta-por-sucursal"
                description="Por cada viaje realizado."
                startContent={<IconReportSearch className="text-green-700" />}
              >
                Detalle
              </DropdownItem>

            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
        {/* FIN VIAJES */}

      </NavbarContent>

      <NavbarContent justify="end">
        <Chip
          variant="flat"
          avatar={
            <Avatar color='primary' name={user?.user_account?.user?.first_name} size="sm" getInitials={(name) => name.charAt(0)} />
          }
        >
          {user?.user_account?.username}
        </Chip>
        <NavbarItem>
          <Button
            as={Link}
            className="bg-[#152026] text-white font-bold"
            onClick={() => onLogout()}
            variant="flat">
            Log out
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
