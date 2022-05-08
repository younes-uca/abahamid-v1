package  com.ird.faa.ws.rest.provided.facade.admin;

import com.ird.faa.service.admin.facade.BiologieAdminService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import com.ird.faa.bean.Biologie;
import com.ird.faa.ws.rest.provided.converter.BiologieConverter;
import com.ird.faa.ws.rest.provided.vo.BiologieVo;

@Api("Manages biologie services")
@RestController
@RequestMapping("api/admin/biologie")
public class BiologieRestAdmin {

@Autowired
private BiologieAdminService biologieService;

@Autowired
private BiologieConverter biologieConverter;


            @ApiOperation("Updates the specified  biologie")
            @PutMapping("/")
            public  BiologieVo update(@RequestBody  BiologieVo  biologieVo){
            Biologie biologie = biologieConverter.toItem(biologieVo);
            biologie = biologieService.update(biologie);
            return biologieConverter.toVo(biologie);
            }

    @ApiOperation("Finds a list of all biologies")
    @GetMapping("/")
    public List<BiologieVo> findAll(){
        return biologieConverter.toVo(biologieService.findAll());
    }

    @ApiOperation("Finds a biologie with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public BiologieVo findByIdWithAssociatedList(@PathVariable Long id){
    return biologieConverter.toVo(biologieService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search biologie by a specific criteria")
    @PostMapping("/search")
    public List<BiologieVo> findByCriteria(@RequestBody BiologieVo biologieVo){
        return biologieConverter.toVo(biologieService.findByCriteria(biologieVo));
        }

            @ApiOperation("Finds a biologie by id")
            @GetMapping("/id/{id}")
            public BiologieVo findById(@PathVariable Long id){
            return biologieConverter.toVo(biologieService.findById(id));
            }

            @ApiOperation("Saves the specified  biologie")
            @PostMapping("/")
            public BiologieVo save(@RequestBody BiologieVo biologieVo){
            Biologie biologie = biologieConverter.toItem(biologieVo);
            biologie = biologieService.save(biologie);
            return biologieConverter.toVo(biologie);
            }

            @ApiOperation("Delete the specified biologie")
            @DeleteMapping("/")
            public int delete(@RequestBody BiologieVo biologieVo){
            Biologie biologie = biologieConverter.toItem(biologieVo);
            return biologieService.delete(biologie);
            }

            @ApiOperation("Deletes a biologie by id")
            @DeleteMapping("/id/{id}")
            public int deleteById(@PathVariable Long id){
            return biologieService.deleteById(id);
            }
        @ApiOperation("find by examen code")
        @GetMapping("/examen/code/{code}")
        public List<Biologie> findByExamenCode(@PathVariable String code){
        return biologieService.findByExamenCode(code);
        }

        @ApiOperation("delete by examen code")
        @DeleteMapping("/examen/code/{code}")
        public int deleteByExamenCode(@PathVariable String code){
        return biologieService.deleteByExamenCode(code);
        }

        @ApiOperation("find by examen id")
        @GetMapping("/examen/id/{id}")
        public List<Biologie> findByExamenId(@PathVariable Long id){
        return biologieService.findByExamenId(id);
        }

        @ApiOperation("delete by examen id")
        @DeleteMapping("/examen/id/{id}")
        public int deleteByExamenId(@PathVariable Long id){
        return biologieService.deleteByExamenId(id);
        }

        @ApiOperation("find by dossierMedicale ref")
        @GetMapping("/dossierMedicale/ref/{ref}")
        public List<Biologie> findByDossierMedicaleRef(@PathVariable String ref){
        return biologieService.findByDossierMedicaleRef(ref);
        }

        @ApiOperation("delete by dossierMedicale ref")
        @DeleteMapping("/dossierMedicale/ref/{ref}")
        public int deleteByDossierMedicaleRef(@PathVariable String ref){
        return biologieService.deleteByDossierMedicaleRef(ref);
        }

        @ApiOperation("find by dossierMedicale id")
        @GetMapping("/dossierMedicale/id/{id}")
        public List<Biologie> findByDossierMedicaleId(@PathVariable Long id){
        return biologieService.findByDossierMedicaleId(id);
        }

        @ApiOperation("delete by dossierMedicale id")
        @DeleteMapping("/dossierMedicale/id/{id}")
        public int deleteByDossierMedicaleId(@PathVariable Long id){
        return biologieService.deleteByDossierMedicaleId(id);
        }



            }
