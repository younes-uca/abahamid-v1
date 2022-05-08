package  com.ird.faa.ws.rest.provided.facade.admin;

import com.ird.faa.service.admin.facade.CliniqueAdminService;

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
import com.ird.faa.bean.Clinique;
import com.ird.faa.ws.rest.provided.converter.CliniqueConverter;
import com.ird.faa.ws.rest.provided.vo.CliniqueVo;

@Api("Manages clinique services")
@RestController
@RequestMapping("api/admin/clinique")
public class CliniqueRestAdmin {

@Autowired
private CliniqueAdminService cliniqueService;

@Autowired
private CliniqueConverter cliniqueConverter;


            @ApiOperation("Updates the specified  clinique")
            @PutMapping("/")
            public  CliniqueVo update(@RequestBody  CliniqueVo  cliniqueVo){
            Clinique clinique = cliniqueConverter.toItem(cliniqueVo);
            clinique = cliniqueService.update(clinique);
            return cliniqueConverter.toVo(clinique);
            }

    @ApiOperation("Finds a list of all cliniques")
    @GetMapping("/")
    public List<CliniqueVo> findAll(){
        return cliniqueConverter.toVo(cliniqueService.findAll());
    }

    @ApiOperation("Finds a clinique with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public CliniqueVo findByIdWithAssociatedList(@PathVariable Long id){
    return cliniqueConverter.toVo(cliniqueService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search clinique by a specific criteria")
    @PostMapping("/search")
    public List<CliniqueVo> findByCriteria(@RequestBody CliniqueVo cliniqueVo){
        return cliniqueConverter.toVo(cliniqueService.findByCriteria(cliniqueVo));
        }

            @ApiOperation("Finds a clinique by id")
            @GetMapping("/id/{id}")
            public CliniqueVo findById(@PathVariable Long id){
            return cliniqueConverter.toVo(cliniqueService.findById(id));
            }

            @ApiOperation("Saves the specified  clinique")
            @PostMapping("/")
            public CliniqueVo save(@RequestBody CliniqueVo cliniqueVo){
            Clinique clinique = cliniqueConverter.toItem(cliniqueVo);
            clinique = cliniqueService.save(clinique);
            return cliniqueConverter.toVo(clinique);
            }

            @ApiOperation("Delete the specified clinique")
            @DeleteMapping("/")
            public int delete(@RequestBody CliniqueVo cliniqueVo){
            Clinique clinique = cliniqueConverter.toItem(cliniqueVo);
            return cliniqueService.delete(clinique);
            }

            @ApiOperation("Deletes a clinique by id")
            @DeleteMapping("/id/{id}")
            public int deleteById(@PathVariable Long id){
            return cliniqueService.deleteById(id);
            }
        @ApiOperation("find by dossierMedicale ref")
        @GetMapping("/dossierMedicale/ref/{ref}")
        public List<Clinique> findByDossierMedicaleRef(@PathVariable String ref){
        return cliniqueService.findByDossierMedicaleRef(ref);
        }

        @ApiOperation("delete by dossierMedicale ref")
        @DeleteMapping("/dossierMedicale/ref/{ref}")
        public int deleteByDossierMedicaleRef(@PathVariable String ref){
        return cliniqueService.deleteByDossierMedicaleRef(ref);
        }

        @ApiOperation("find by dossierMedicale id")
        @GetMapping("/dossierMedicale/id/{id}")
        public List<Clinique> findByDossierMedicaleId(@PathVariable Long id){
        return cliniqueService.findByDossierMedicaleId(id);
        }

        @ApiOperation("delete by dossierMedicale id")
        @DeleteMapping("/dossierMedicale/id/{id}")
        public int deleteByDossierMedicaleId(@PathVariable Long id){
        return cliniqueService.deleteByDossierMedicaleId(id);
        }



            }
