import React from 'react';
import { Card, CardContent, CardTitle } from '@shadcn/ui';

const ServiceSection = () => {
  return (
    <section id="servicios" className="p-4">
      <h2 className="text-xl font-bold mb-4">Nuestros Servicios</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent>
            <CardTitle>Product Factory</CardTitle>
            <p>Desarrollamos soluciones de software personalizadas...</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardTitle>Data BI Solutions</CardTitle>
            <p>Creamos tableros digitales decisionales con Power BI...</p>
          </CardContent>
        </Card>
        {/* Agrega más servicios según sea necesario */}
      </div>
    </section>
  );
};

export default ServiceSection; 