import React from "react";
import styled from "styled-components";
import { List, TinyListItem } from "../../styleguide/List";
import Text from "../../styleguide/Text";

const Table = styled.table`
  border-spacing: 0;
  border: 1px solid black;
`;

const TableHeader = styled.th`
  margin: 0;
  padding: 0.5rem;
  border-bottom: 1px solid black;
  border-right: 1px solid black;

  :last-child {
    border-right: 0;
  }
`;
const TableData = styled.td`
  margin: 0;
  padding: 0.5rem;
  border-bottom: 1px solid black;
  border-right: 1px solid black;

  :last-child {
    border-right: 0;
  }
`;
const TableRow = styled.tr`
  :last-child {
    td {
      border-bottom: 0;
    }
  }
`;

const VaccineTypesTable: React.FC = () => {
  return (
    <Table>
      <TableRow>
        <TableHeader>
          <Text color="onSurface" bold element="span">
            Vaccine Type
          </Text>
        </TableHeader>
        <TableHeader>
          <Text color="onSurface" bold element="span">
            Description
          </Text>
        </TableHeader>
        <TableHeader>
          <Text color="onSurface" bold element="span">
            Manufacturers
          </Text>
        </TableHeader>
      </TableRow>
      <TableRow>
        <TableData>
          <Text color="onSurface" element="span">
            Inactivated vaccine
          </Text>
        </TableData>
        <TableData>
          <Text color="onSurface" element="span">
            Based on killed viruses. It is impossible for the killed virus to
            infect cells, but it can still activate an immune response.
          </Text>
        </TableData>
        <TableData>
          <List>
            <TinyListItem>
              <Text color="onSurface" element="span">
                Institute of Medical Biology
              </Text>
            </TinyListItem>
            <TinyListItem>
              <Text color="onSurface" element="span">
                Chinese Academy of Medical Sciences (IMBCAMS)
              </Text>
            </TinyListItem>
            <TinyListItem>
              <Text color="onSurface" element="span">
                China Sinopharm / BIBP2 Sinovac
              </Text>
            </TinyListItem>
          </List>
        </TableData>
      </TableRow>

      <TableRow>
        <TableData>
          <Text color="onSurface" element="span">
            Live-attenuated vaccine
          </Text>
        </TableData>
        <TableData>
          <Text color="onSurface" element="span">
            Based on weakened viruses. Their reproduction has been significantly
            reduced, but they are still able to activate an immune response.
          </Text>
        </TableData>
        <TableData>
          <List>
            <TinyListItem>
              <Text color="onSurface" element="span">
                Codagenix/Serum Institute of India
              </Text>
            </TinyListItem>
          </List>
        </TableData>
      </TableRow>
      <TableRow>
        <TableData>
          <Text color="onSurface" element="span">
            Subunit vaccine
          </Text>
        </TableData>
        <TableData>
          <Text color="onSurface" element="span">
            Based on small parts of viruses, typically one protein or a part of
            a protein. This may trigger an immune response.
          </Text>
        </TableData>
        <TableData>
          <List>
            <TinyListItem>
              <Text color="onSurface" element="span">
                Novavax
              </Text>
            </TinyListItem>
            <TinyListItem>
              <Text color="onSurface" element="span">
                Zhifei Longcom, China
              </Text>
            </TinyListItem>
            <TinyListItem>
              <Text color="onSurface" element="span">
                Sanofi Pasteur/GSK
              </Text>
            </TinyListItem>
          </List>
        </TableData>
      </TableRow>

      <TableRow>
        <TableData>
          <Text color="onSurface" element="span">
            Virus-like particle vaccine
          </Text>
        </TableData>
        <TableData>
          <Text color="onSurface" element="span">
            Based on “empty” viruses. This means that the vaccine contains the
            shell of the virus, but no genetic material. The empty viruses may
            trigger an immune response.
          </Text>
        </TableData>
        <TableData>
          <List>
            <TinyListItem>
              <Text color="onSurface" element="span">
                Medicago Inc.
              </Text>
            </TinyListItem>
            <TinyListItem>
              <Text color="onSurface" element="span">
                Serum Institute of India/ Accelagen Pty/SpyBiotech
              </Text>
            </TinyListItem>
            <TinyListItem>
              <Text color="onSurface" element="span">
                VBI Vaccines Inc.
              </Text>
            </TinyListItem>
          </List>
        </TableData>
      </TableRow>

      <TableRow>
        <TableData>
          <Text color="onSurface" element="span">
            Viral vector vaccine
          </Text>
        </TableData>
        <TableData>
          <Text color="onSurface" element="span">
            Based on a harmless, unrelated virus which has been altered to carry
            some of the genetic material of the virus that causes the disease.
            This vaccine exploits cells in your body to produce proteins from
            the disease-causing virus, which triggers an immune response.
          </Text>
        </TableData>
        <TableData>
          <List>
            <TinyListItem>
              <Text color="onSurface" element="span">
                AstraZeneca
              </Text>
            </TinyListItem>
            <TinyListItem>
              <Text color="onSurface" element="span">
                Janssen Pharmaceutical
              </Text>
            </TinyListItem>
            <TinyListItem>
              <Text color="onSurface" element="span">
                Gamaleya Research Institute; Health Ministry of the Russian
                Federation (better known by its vaccine name: Sputnik V)
              </Text>
            </TinyListItem>
          </List>
        </TableData>
      </TableRow>
    </Table>
  );
};

export default VaccineTypesTable;
